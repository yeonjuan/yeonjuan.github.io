import type { z } from "zod";
import path from "path";
import matter from "gray-matter";
import fs from "fs/promises";
import { globby } from "globby";
import Markdoc from "@markdoc/markdoc";
import { config } from "./markdoc.config";
import type { BlogData, BlogPostData } from "../../data/blog";

// path is relative to where you run the `yarn build` command
const contentDirectory = path.normalize("./git-dev-blog");

async function parseAndTransform({ content }: { content: string }) {
  const ast = Markdoc.parse(content);

  const errors = Markdoc.validate(ast, config);
  if (errors.length) {
    console.error(errors);
    throw new Error("Markdoc validation error");
  }
  const transformedContent = Markdoc.transform(ast, config);

  return transformedContent;
}

function validateFrontmatter<T extends z.ZodTypeAny>({
  frontmatter,
  schema,
  filepath,
}: {
  frontmatter: { [key: string]: unknown };
  schema: T;
  filepath: string;
}) {
  try {
    const validatedFrontmatter = schema.parse(frontmatter);
    return validatedFrontmatter as z.infer<T>;
  } catch (e) {
    const errMessage = `
      There was an error validating your frontmatter. 
      Please make sure your frontmatter for file: ${filepath} matches its schema.
    `;
    throw Error(errMessage + (e as Error).message);
  }
}

export async function read<T extends z.ZodTypeAny>({
  filepath,
  schema,
  meta,
}: {
  filepath: string;
  schema: T;
  meta: {
    external: boolean;
    title: string;
    date: string;
    description: string;
  };
}) {
  const rawString = await fs.readFile(filepath, "utf8");
  const rawWithMeta = `---
external: ${meta.external}
draft: false
title: ${meta.title}
description: ${meta.description}
date: ${meta.date}
---
${rawString}`;

  const { content, data: frontmatter } = matter(rawWithMeta);
  const transformedContent = await parseAndTransform({ content });
  const validatedFrontmatter = validateFrontmatter({
    frontmatter,
    schema,
    filepath,
  });

  const splitedFilepath = filepath.split("/");
  splitedFilepath.shift();
  const filename = splitedFilepath.pop();

  if (typeof filename !== "string") {
    throw new Error("Check what went wrong");
  }
  const fileNameWithoutExtension = [
    ...splitedFilepath,
    filename.replace(/\.[^.]*$/, ""),
  ].join("/");

  return {
    slug: fileNameWithoutExtension,
    content: transformedContent,
    frontmatter: validatedFrontmatter,
  };
}

export async function readOne<T extends z.ZodTypeAny>({
  dir,
  post,
  frontmatterSchema: schema,
}: {
  dir: string;
  post: BlogPostData;
  frontmatterSchema: T;
}) {
  const filepath = path.join(dir, post.src);
  return read({
    filepath,
    schema,
    meta: {
      external: post.external,
      title: post.title,
      description: post.description,
      date: post.date,
    },
  });
}

export async function readAll<T extends z.ZodTypeAny>({
  blogData,
  frontmatterSchema: schema,
}: {
  blogData: BlogData;
  frontmatterSchema: T;
}) {
  const posts = blogData.posts.map((post) => {
    return {
      path: path.posix.join(blogData.dir, post.src),
      meta: {
        external: post.external,
        title: post.title,
        description: post.description,
        date: post.date,
      },
    };
  });

  return Promise.all(
    posts.map((post) => read({ filepath: post.path, schema, meta: post.meta }))
  );
}

const { join, parse } = require("path");
const { copyFile } = require("fs");
const { glob } = require("glob");

async function copyBlogResources() {
  const files = await glob("git-dev-blog/**/*.{png, jpg, jpeg, webp}");
  files.forEach((file) => {
    const { ext, name } = parse(file);
    copyFile(file, join("public/images", `/blog/${name}${ext}`), () => {});
  });
}

copyBlogResources();

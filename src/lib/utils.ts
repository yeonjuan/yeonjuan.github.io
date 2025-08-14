import type { BlogPostData } from "src/data/blog";

export const compareDateString = (
  dateStringA: string,
  dateStringB: string,
): number => {
  const dateA = new Date(dateStringA);
  const dateB = new Date(dateStringB);
  return dateA.getTime() - dateB.getTime();
};

export const pickLatestPost = (
  posts: BlogPostData[],
  max: number,
): BlogPostData[] => {
  return [...posts]
    .sort((a, b) => compareDateString(a.date, b.date))
    .slice(0, max);
};

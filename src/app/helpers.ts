import fs from "fs";
import path from "path";

const DATA_DIRECTORY = path.resolve(process.cwd(), "data");

export type Contributions = {
  owner: string;
  repo: string;
  contributionsTotal: number;
  contributions: [
    {
      pr: string;
      title: string;
      updatedAt: string;
    }
  ];
};

export async function getAllContributions(): Promise<Contributions[]> {
  const file = fs.readFileSync(
    path.resolve(DATA_DIRECTORY, "contributions.json"),
    "utf-8"
  );
  return JSON.parse(file) as Contributions[];
}

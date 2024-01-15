import Link from "next/link";
import { getAllContributions } from "./helpers";

export default async function Home() {
  const ALL_CONTRIBUTIONS = await getAllContributions();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <section>
        <h1>Hi, I{"'"}m YeonJuAn</h1>
        <ul>
          {ALL_CONTRIBUTIONS.map((item) => {
            const repo = `${item.owner}/${item.repo}`;
            return (
              <li key={repo}>
                <span>{repo}</span>
                <ul>
                  {item.contributions.map((contribution) => (
                    <li key={contribution.title}>
                      <Link href={contribution.pr}>{contribution.title}</Link>
                    </li>
                  ))}
                </ul>
              </li>
            );
          })}
        </ul>
        {}
      </section>
    </main>
  );
}

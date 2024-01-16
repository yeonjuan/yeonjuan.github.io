"use client";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import classnames from "classnames";
import { useState } from "react";
import type { Contributions } from "@/app/helpers";
import Link from "next/link";

export default function ContributionsChart({
  items,
}: {
  items: Contributions[];
}) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const maxContributionsTotal = items[0].contributionsTotal;
  return (
    <ul className="text-sm">
      {items.map(
        ({ owner, repo, contributionsTotal, color, contributions }, index) => {
          const unit = 80 / maxContributionsTotal;
          const width = `${unit * contributionsTotal}%`;
          const isSelected = index === selectedIndex;
          return (
            <div
              key={owner}
              className={classnames(
                "flex flex-col items-center border-b py-2 relative",
                index === 0 && "border-t"
              )}
            >
              <div
                className="flex flex-row w-full items-center"
                onClick={() =>
                  setSelectedIndex((prev) => {
                    if (prev === index) return null;
                    return index;
                  })
                }
              >
                <div className="flex flex-col w-full">
                  <span
                    className={classnames(
                      "text-slate-500",
                      isSelected && "text-slate-950"
                    )}
                  >
                    {owner}/{repo}
                  </span>
                  <div className="flex items-center">
                    <span
                      className="flex items-center rounded-r-full"
                      style={{
                        height: "15px",
                        width: width,
                        backgroundColor: color,
                        opacity: isSelected ? 0.6 : 0.2,
                      }}
                    />
                    <span
                      className={classnames(
                        "ml-2 text-[12px] text-slate-500",
                        isSelected && "text-slate-950"
                      )}
                    >
                      {contributionsTotal}
                    </span>
                  </div>
                </div>
                <div className="text-slate-300">
                  {isSelected ? <FaAngleUp /> : <FaAngleDown />}
                </div>
              </div>
              {isSelected && (
                <ul className="text-xs max-h-[300px] overflow-y-auto w-full overflow-x-hidden pl-2 absolute top-[60px] bg-white z-10 border rounded-md">
                  {contributions.map((contribution) => {
                    return (
                      <li key={contribution.title} className="w-full my-2">
                        <Link
                          href={contribution.pr}
                          className="overflow-hidden w-full inline-block truncate ..."
                        >
                          {contribution.title}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
          );
        }
      )}
    </ul>
  );
}

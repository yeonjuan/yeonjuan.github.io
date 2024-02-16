"use client";
import { FaAngleDown } from "react-icons/fa6";
import classnames from "classnames";
import { useEffect, useRef, useState } from "react";
import type { Contributions } from "@/app/helpers";
import Link from "next/link";
import Image from "next/image";

export default function ContributionsChart({
  items,
}: {
  items: Contributions[];
}) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const maxContributionsTotal = items[0].contributionsTotal;
  const detailsRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    function handleOutsideClick(event: MouseEvent) {
      if (!detailsRef.current) {
        return;
      }
      if (event.target instanceof HTMLElement) {
        if (detailsRef.current.contains(event.target)) {
          return;
        }
        setSelectedIndex(null);
      }
    }
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.addEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <ul className="text-sm" ref={detailsRef}>
      {items.map(
        ({ owner, repo, contributionsTotal, color, contributions }, index) => {
          const unit = 80 / maxContributionsTotal;
          const width = `${unit * contributionsTotal}%`;
          const isSelected = index === selectedIndex;
          const opacity = 0.8;
          return (
            <div
              key={owner}
              className={classnames(
                "flex flex-col items-center border-b py-2 relative",
                index === 0 && "border-t"
              )}
            >
              <div
                className="flex flex-col w-full items-center cursor-pointer"
                onClick={() =>
                  setSelectedIndex((prev) => {
                    if (prev === index) return null;
                    return index;
                  })
                }
              >
                <div className="flex flex-row w-full items-center">
                  <div className="flex flex-col w-full">
                    <span
                      className={classnames("text-slate-950 flex items-center")}
                    >
                      <Image
                        src={`/${repo}`}
                        alt=""
                        width={16}
                        height={16}
                        style={{ opacity }}
                        className="mr-2 inline-block"
                      />
                      {owner}/{repo}
                    </span>
                    <div className="flex items-center">
                      <span
                        className="flex items-center rounded-r-full"
                        style={{
                          height: "15px",
                          width: width,
                          backgroundColor: color,
                          opacity,
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
                  <div
                    className={classnames(
                      "text-slate-500 transition duration-200",
                      isSelected && "rotate-180"
                    )}
                  >
                    <FaAngleDown />
                  </div>
                </div>
                <ul
                  className={classnames(
                    "text-xs transition-[max-height] overflow-y-auto w-full overflow-x-hidden bg-white z-10 px-2",
                    isSelected
                      ? "max-h-[200px] mt-2"
                      : "max-h-0 overflow-hidden"
                  )}
                >
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
              </div>
            </div>
          );
        }
      )}
    </ul>
  );
}

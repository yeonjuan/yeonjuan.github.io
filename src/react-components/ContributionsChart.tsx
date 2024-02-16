import { FaAngleDown } from "react-icons/fa6";
import classnames from "classnames";
import React, { useEffect, useRef, useState } from "react";

type Contributions = {
  owner: string;
  repo: string;
  contributionsTotal: number;
  color: string;
  contributions: [
    {
      pr: string;
      title: string;
      updatedAt: string;
    }
  ];
};

export default function ContributionsChart({
  items,
}: {
  items: Contributions[];
}) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const maxContributionsTotal = items[0]?.contributionsTotal || 10;
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
    <ul className="text-sm mt-4" ref={detailsRef}>
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
                "flex flex-col items-center py-2 relative px-4"
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
                    <span className={classnames("flex items-center")}>
                      <img
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
                      <span className={classnames("ml-2 text-[12px]")}>
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
                    "text-xs transition-[max-height] overflow-y-auto w-full overflow-x-hidden z-10 px-2",
                    isSelected
                      ? "max-h-[200px] mt-2"
                      : "max-h-0 overflow-hidden"
                  )}
                >
                  {contributions.map((contribution) => {
                    return (
                      <li key={contribution.title} className="w-full my-2">
                        <a
                          href={contribution.pr}
                          className="unset overflow-hidden w-full inline-block truncate ... hover:underline"
                          target="_blank"
                        >
                          {contribution.title}
                        </a>
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

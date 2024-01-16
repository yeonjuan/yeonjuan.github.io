import { FaAngleDown } from "react-icons/fa6";
import classnames from "classnames";

export default function ContributionsChart({
  items,
}: {
  items: {
    owner: string;
    repo: string;
    contributionsTotal: number;
    color: string;
  }[];
}) {
  const maxContributionsTotal = items[0].contributionsTotal;
  return (
    <ul className="text-sm">
      {items.map(({ owner, repo, contributionsTotal, color }, index) => {
        const unit = 80 / maxContributionsTotal;
        const width = `${unit * contributionsTotal}%`;
        return (
          <div
            key={owner}
            className={classnames(
              "flex flex-row items-center border-b py-2",
              index === 0 && "border-t"
            )}
          >
            <div className="flex flex-col w-full">
              <span className="">
                {owner}/{repo}
              </span>
              <div className="flex items-center">
                <span
                  className="flex items-center rounded-r-full"
                  style={{
                    height: "15px",
                    width: width,
                    backgroundColor: color,
                    opacity: 0.6,
                  }}
                />
                <span className="ml-2 text-[12px]">{contributionsTotal}</span>
              </div>
            </div>
            <FaAngleDown />
          </div>
        );
      })}
    </ul>
  );
}

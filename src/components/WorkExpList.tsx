import { FaAngleDown } from "react-icons/fa6";
export default function WorkExpList({
  items,
}: {
  items: { company: string; team?: string; period: string }[];
}) {
  return (
    <ul className="text-sm [&>li]:my-1">
      {items.map(({ company, team, period }) => (
        <li key={company} className="flex flex-col border-b py-2">
          <div className="flex items-center">
            <span className=" text-sm min-w-[60px]">{company}</span>
            {team && <span className="px-2 text-xs">{team}</span>}
            <span className="px-2 text-gray-700 italic text-xs ml-auto">
              {period}
            </span>
            <div>
              <FaAngleDown className="text-slate-500 transition duration-200" />
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

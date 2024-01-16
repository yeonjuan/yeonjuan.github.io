export default function WorkExpList({
  items,
}: {
  items: { company: string; period: string }[];
}) {
  return (
    <ul className="text-sm [&>li]:my-1">
      {items.map(({ company, period }) => (
        <li key={company} className="flex flex-col">
          <div className="flex items-center">
            <span className=" text-sm">{company}</span>
            <span className="px-2 text-gray-700 italic text-xs">{period}</span>
          </div>
        </li>
      ))}
    </ul>
  );
}

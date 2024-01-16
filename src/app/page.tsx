import Link from "next/link";
import { getAllContributions } from "./helpers";
import Image from "next/image";
import profileImage from "../../public/proflie.jpeg";
import WorkExpList from "@/components/WorkExpList";
import ContributionsChart from "@/components/ContributionsChart";

const WORK_EXPERIENCES = [
  {
    company: "LINE+",
    period: "2021.9 ~",
  },
  {
    company: "Kakao",
    period: "2021.9 ~",
  },
  {
    company: "KT",
    period: "2021.9 ~",
  },
  {
    company: "JoongAng Ilbo",
    period: "2021.9 ~",
  },
];

export default async function Home() {
  const ALL_CONTRIBUTIONS = await getAllContributions();
  return (
    <main className="px-8 py-8">
      <div className="max-w-[800px] m-auto">
        <div className="flex border-b py-2 my-2">
          <Image alt="" src={profileImage} className="w-20 rounded-full" />
          <div className="flex items-center px-4">
            <h1 className="text-xl">YeonJuAn</h1>
          </div>
        </div>
        <div className="py-2 my-2">
          <h2 className="text-xl pb-2">Work Experiences</h2>
          <ul className="text-sm pl-2 [&>li]:my-1">
            <WorkExpList items={WORK_EXPERIENCES} />
          </ul>
        </div>
        <div className="py-2 my-2">
          <h2 className="text-xl pb-2">Education</h2>
          <ul>
            <li>
              <span className="text-sm">Hanyang University</span>
            </li>
          </ul>
        </div>
        <div className="py-2 my-2">
          <h2 className="text-xl pb-2">Open Source Contributions</h2>
          <ContributionsChart items={ALL_CONTRIBUTIONS} />
        </div>
        <div className="py-2 my-2">
          <h2 className="text-xl pb-2">Open Source Projects</h2>
          <ul>
            <li>
              <span className="text-sm">Hanyang University</span>
            </li>
          </ul>
        </div>
        <div className="py-2 my-2">
          <h2 className="text-xl pb-2">Activities</h2>
          <ul>
            <li>
              <span className="text-sm">Hanyang University</span>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}

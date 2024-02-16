import Link from "next/link";
import { getAllContributions } from "./helpers";
import Image from "next/image";
import profileImage from "../../public/proflie.jpeg";
import WorkExpList from "@/components/WorkExpList";
import ContributionsChart from "@/components/ContributionsChart";

const WORK_EXPERIENCES = [
  {
    company: "LINE+",
    team: "UIT",
    period: "2021.9 ~ 현재",
  },
  {
    company: "Kakao",
    team: "FE 플랫폼",
    period: "2019.01 ~ 2021.9",
  },
  {
    company: "KT",
    team: "소프트웨어 개발단",
    period: "2021.9 ~",
  },
  {
    company: "중앙일보",
    team: "디지털 혁신 사업부",
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
            <h1 className="text-xl">연주안</h1>
          </div>
        </div>
        <div className="py-2 my-2">
          <h2 className="text-xl pb-2">경력</h2>
          <ul className="text-sm pl-2 [&>li]:my-1">
            <WorkExpList items={WORK_EXPERIENCES} />
          </ul>
        </div>
        <div className="py-2 my-2">
          <h2 className="text-xl pb-2">교육</h2>
          <span className="text-sm">한양대학교 컴퓨터 공학 학사</span>
        </div>
        <div className="py-2 my-2">
          <h2 className="text-xl pb-2">오픈소스 기여</h2>
          <ContributionsChart items={ALL_CONTRIBUTIONS} />
        </div>
        <div className="py-2 my-2">
          <h2 className="text-xl pb-2">오픈소스 프로젝트</h2>
          <ul className="text-sm">
            <li>
              <div className="flex items-center">
                <h3 className="my-2">html-eslint</h3>
                <span className="mx-2 text-xs text-slate-600">★123</span>
              </div>
              <p className="text-xs pl-2">
                HTML 코드를 정적분석하기 위한 ESLint 플러그인 프로젝트 입니다.
                HTML 코드를 정적분석하여 버그, 포맷팅, 모범사례를 지킬 수 있도록
                해줍니다.
              </p>
            </li>
            <li>
              <div className="flex items-center">
                <h3 className="my-2">html-eslint</h3>
                <span className="mx-2 text-xs text-slate-600">★123</span>
              </div>
              <p className="text-xs pl-2">
                HTML 코드를 파싱해서 ESTree-like 한 포맷의 AST를 생성하는 파서
                프로젝트 입니다.
              </p>
            </li>
            <li>
              <div className="flex items-center">
                <h3 className="my-2">html-eslint</h3>
                <span className="mx-2 text-xs text-slate-600">★123</span>
              </div>
              <p className="text-xs pl-2">
                git diff 결과물을 트리 자료구조의 데이터로 파싱하는
                프로젝트입니다.
              </p>
            </li>
          </ul>
        </div>
        <div className="py-2 my-2">
          <h2 className="text-xl pb-2">활동</h2>
          <ul className="text-sm">
            <li>
              <h3>ESLint 커미터</h3>
            </li>
            <li>
              <h3>Rome 코어 컨트리뷰터</h3>
            </li>
            <li>
              <h3>JS 13K 2019</h3>
              <p>JS 13K 는 13kb 이내로 웹 게임을 만드는 커뮤니티 대회입니다.</p>
            </li>
            <li>
              <h3>오픈소스 컨트리뷰톤 2019 멘토</h3>

              <p>JS 13K 는 13kb 이내로 웹 게임을 만드는 커뮤니티 대회입니다.</p>
            </li>
            <li>
              <h3>Dev Blog</h3>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}

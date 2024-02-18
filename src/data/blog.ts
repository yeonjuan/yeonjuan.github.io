export type BlogPostData = {
  src: string;
  date: string;
  title: string;
  description: string;
  external: boolean;
};

export type BlogData = {
  dir: string;
  posts: BlogPostData[];
};

export const BLOG_DATA = {
  dir: "git-dev-blog",
  posts: [
    {
      src: "JavaScript/speeding-up-the-javascript-ecosystem-the-barrel-file-debacle.md",
      date: "2023-10-29",
      title:
        "자바스크립트 에코시스템의 속도 향상 - 배럴(Barrel) 파일의 대실패 (번역)",
      external: false,
      description: "description",
    },
    {
      src: "JavaScript/sharing-data-between-css-and-javascript-using-custom-properties.md",
      date: "2023-05-01",
      title:
        "커스텀 프로퍼티를 이용해 CSS 와 자바스크립트 간 데이터 공유하기 (번역)",
      description: "description",
      external: false,
    },
    {
      src: "JavaScript/should-you-really-use-usememo.md",
      date: "2023-03-19",
      title: "정말 리액트에서 useMemo를 사용해야 할까요? 알아봅시다. (번역)",
      external: false,
      description: "description",
    },
    {
      src: "JavaScript/well-known-symbols.md",
      date: "2023-02-25",
      title: "Well-Known symbols (번역)",
      external: false,
      description: "description",
    },
    {
      src: "JavaScript/reduce-html-payload-with-nextjs.md",
      date: "2022-01-18",
      title: "Next.js에서 HTML 페이로드 줄이기 (번역)",
      external: false,
      description: "description",
    },
    {
      src: "JavaScript/json-parser-with-javascript.md",
      date: "2022-11-18",
      title: "JavaScript JSON 파서 (번역)",
      external: false,
      description: "description",
    },
    {
      src: "Browser/send-an-http-request-on-page-exit.md",
      date: "2022-01-01",
      title: "사용자가 페이지를 떠날 때 안정적으로 HTTP 요청 보내기 (번역)",
      external: false,
      description: "description",
    },
    {
      src: "JavaScript/falsy-truthy.md",
      date: "2020-05-03",
      title: "falsy & truthy",
      external: false,
      description: "description",
    },
    {
      src: "JavaScript/return-null-vs-undefined.md",
      date: "2020-07-12",
      title: "return undefined vs null",
      external: false,
      description: "description",
    },
    {
      src: "DesignPattern/builder-pattern-exploration.md",
      date: "2020-05-23",
      title: "빌더 패턴 탐구 (번역)",
      external: false,
      description: "description",
    },
    {
      src: "JavaScript/node-module-on-browser.md",
      date: "2020-10-24",
      title: "node 패키지 브라우저에서 사용하기 with Webpack 4",
      external: false,
      description: "description",
    },
    {
      src: "Review/js-13k-2019.md",
      date: "2019-10-06",
      title: "Js13kGames 2019 참가 후기",
      external: false,
      description: "description",
    },
    {
      src: "Review/hacktoberfest-2019.md",
      date: "2019-10-22",
      title: "Hacktoberfest 2019 참가 후기",
      external: false,
      description: "description",
    },
    {
      src: "JavaScript/coding-convention-2.md",
      date: "2019-09-06",
      title: "코딩 컨벤션 업무를 하며 알게 된 것들 - 2",
      external: false,
      description: "description",
    },
    {
      src: "JavaScript/coding-convention-1.md",
      date: "2019-09-06",
      title: "코딩 컨벤션 업무를 하며 알게 된 것들 - 1",
      external: false,
      description: "description",
    },
  ],
};

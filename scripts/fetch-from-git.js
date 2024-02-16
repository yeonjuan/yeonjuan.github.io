require("dotenv").config({ path: ".env.local" });
const { Octokit } = require("octokit");
const path = require("path");
const utils = require("./utils");

const DATA_DIRECTORY_PATH = path.resolve(process.cwd(), "data");
const PUBLIC_DIRECTORY_PATH = path.resolve(process.cwd(), "public");

/**
 * @param {Octokit} octokit
 */
async function loadProfile(octokit) {
  const PROFILE_IMAGE_PATH = path.resolve(
    PUBLIC_DIRECTORY_PATH,
    "proflie.jpeg"
  );
  const { data } = await octokit.rest.users.getAuthenticated();
  await utils.downloadImage(data.avatar_url, PROFILE_IMAGE_PATH);
}

/**
 * @param {Octokit} octokit
 * @param {{owner: string, repo: string}} project
 * @returns {Promise<{ pr: string, title: string }[]>}
 */
async function fetchContributions(octokit, { owner, repo }) {
  const { data } = await octokit.rest.search.issuesAndPullRequests({
    q: `type:pr+repo:${owner}/${repo}+author:yeonjuan+is:merged`,
    per_page: 100,
  });
  const contributions = data.items.map((item) => {
    return {
      pr: item.html_url,
      title: item.title,
      updatedAt: item.updated_at,
    };
  });
  return contributions;
}

/**
 * @param {Octokit} octokit
 * @param {{owner: string, repo: string}} project
 * @returns {Promise<{ avatar: string }>}
 */
async function fetchProjectInfo(octokit, { owner, repo }) {
  const { data } = await octokit.rest.repos.get({ owner, repo });
  return {
    avatar: data.owner.avatar_url,
  };
}

/**
 * @param {Octokit} octokit
 * @param {{owner: string, repo: string}[]} projects
 */
async function loadContributions(octokit, projects) {
  const CONTRIBUTIONS_FILE_PATH = path.resolve(
    DATA_DIRECTORY_PATH,
    "contributions.json"
  );
  const allContributions = await Promise.all(
    projects.map(async ({ owner, repo, color }) => {
      const [contributions, projectInfo] = await Promise.all([
        fetchContributions(octokit, { owner, repo }),
        fetchProjectInfo(octokit, { owner, repo }),
      ]);
      await utils.downloadImage(
        projectInfo.avatar,
        path.resolve(PUBLIC_DIRECTORY_PATH, repo)
      );
      return {
        owner,
        repo,
        color,
        contributionsTotal: contributions.length,
        contributions,
      };
    })
  );
  allContributions.sort(
    (contributionA, contributionB) =>
      contributionB.contributionsTotal - contributionA.contributionsTotal
  );
  await utils.writeJSON(allContributions, CONTRIBUTIONS_FILE_PATH);
}

const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });

loadProfile(octokit);

loadContributions(octokit, [
  {
    owner: "typescript-eslint",
    repo: "typescript-eslint",
    color: "#2656c7",
  },
  {
    owner: "eslint",
    repo: "eslint",
    color: "#4B32C3",
  },
  {
    owner: "babel",
    repo: "babel",
    color: "#eeda7c",
  },
  {
    owner: "facebook",
    repo: "react",
    color: "rgb(8, 126, 164)",
  },
  {
    owner: "GoogleChrome",
    repo: "lighthouse",
    color: "#DD5144",
  },
]);

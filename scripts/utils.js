const fs = require("fs/promises");
const axios = require("axios").default;

/**
 * @param {string} url
 * @param {string} filepath
 */
async function downloadImage(url, filepath) {
  const response = await axios.get(url, { responseType: "arraybuffer" });
  await fs.writeFile(filepath, response.data);
  console.log("Image downloaded!");
  console.log("  url: " + url);
  console.log("  file: " + filepath);
}

/**
 * @param {object} data
 * @param {string} filepath
 */
async function writeJSON(data, filepath) {
  const jsonString = JSON.stringify(data);
  await fs.writeFile(filepath, jsonString, "utf-8");
  console.log("JSON created!");
  console.log("  file: " + filepath);
}

module.exports = {
  downloadImage,
  writeJSON,
};

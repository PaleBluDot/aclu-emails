const fs = require('fs');
const path = require('path');
const affiliates = require('./affiliate.json');
const directoryPath = path.join(__dirname, '../productions');

let totalFileCount = 0;

const directories = fs.readdirSync(directoryPath, { withFileTypes: true })
  .filter(dirent => dirent.isDirectory())
  .map(dirent => {
    const dirPath = path.join(directoryPath, dirent.name);
    const files = fs.readdirSync(dirPath);
    totalFileCount += files.length;
    const directoryData = require(`../productions/${dirent.name}/${dirent.name}.json`);
    const affiliateData = affiliates[directoryData.affiliate_code];
    if (!affiliateData) {
      console.error(`No affiliate data found for code: ${directoryData.affiliate_code}`);
      return null;
    }
    return {
      name: dirent.name,
      fileCount: files.length,
      files: files,
      affiliateCode: directoryData.affiliate_code,
      logoUrl: affiliateData.logo_url
    };
  })
  .filter(directory => directory !== null);  // Remove directories without affiliate data

module.exports = { directories, totalFileCount };

const fs = require('fs');
const packageJson = require('./package.json');  // Reading package.json

const versionFilePath = './src/environments/version.ts';  // File where version will be stored
const versionContent = `export const version = '${packageJson.version}';\n`;

fs.writeFile(versionFilePath, versionContent, (err) => {
  if (err) {
    return console.log('Error writing version file:', err);
  }
  console.log(`Version ${packageJson.version} written to version.ts`);
});

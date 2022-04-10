//Dangerous file! Only run if you want to append contents to test files
// import * as fs from 'fs';

// for (const fileName of fs.readdirSync('lib')) {
//   const fileContents = `import { describe } from "mocha";
// import { assert } from "chai";
// import { ${fileName.replace(".js","")} } from "../lib/${fileName}";

// describe("${fileName.replace(".js", "")}", () => {
//   it("");
//   it("");
//   it("");
//   it("");
//   it("");
// });`;
//   fs.appendFileSync(`tests/${fileName}`, fileContents);
// }
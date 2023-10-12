// console.log("Hello Node");
// console.log(global);

// const os = require("os");
// console.log(os.type());
// console.log(os.version());

// console.log(__dirname);
// console.log(__filename);
// console.log("-------------");

// const path = require("path");
// console.log(path.dirname(__filename));

// console.log(path.parse(__filename));

// const { add, sub, mul, div } = require("./math");
// console.log(add(2, 3));
// console.log(sub(2, 3));
// console.log(mul(2, 3));
// console.log(div(2, 3));

const fs = require("fs");
const path = require("path");

fs.readFile(path.join(__dirname, "files", "test.txt"), "utf-8", (err, data) => {
  if (err) throw err;
  console.log(data);
});

process.on("uncaughtException", (err) => {
  console.error(`There was an uncaught error: ${err}`);
  process.exit(1);
});
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

const fsPromises = require("fs").promises;
const path = require("path");

const fileOps = async () => {
  try {
    const data = await fsPromises.readFile(
      path.join(__dirname, "files", "test.txt"),
      "utf-8"
    );
    console.log(data);

    await fsPromises.writeFile(
      path.join(__dirname, "files", "createfile.txt"),
      "File creating using writefile"
    );
    console.log("file created!");

    await fsPromises.appendFile(
      path.join(__dirname, "files", "createfile.txt"),
      "\n\n Update the file using append command!"
    );
    console.log("Append");

    await fsPromises.rename(
      path.join(__dirname, "files", "createfile.txt"),
      path.join(__dirname, "files", "renameFile.txt")
    );
    console.log("File rename");
  } catch (err) {
    console.error(err);
  }
};

fileOps();

// fs.readFile(path.join(__dirname, "files", "test.txt"), "utf-8", (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

// fs.writeFile(
//   path.join(__dirname, "files", "newFile.txt"),
//   "Hello Node JS",
//   (err) => {
//     if (err) throw err;
//     console.log("Write Compleet");
//     fs.appendFile(
//       path.join(__dirname, "files", "newFile.txt"),
//       "\n\n Thank you",
//       (err) => {
//         if (err) throw err;
//         console.log("Append complete");
//       }
//     );
//   }
// );

// process.on("uncaughtException", (err) => {
//   console.error(`There was an uncaught error: ${err}`);
//   process.exit(1);
// });

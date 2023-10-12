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

    await fsPromises.unlink(path.join(__dirname, "files", "renameFile.txt"));
    console.log("file deleted");
  } catch (err) {
    console.error(err);
  }
};

fileOps();

// exit an uncaught error
process.on("uncaughtException", (err) => {
  console.error(`There was an uncaught error: ${err}`);
  process.exit(1);
});

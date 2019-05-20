import fs from "fs";
import readline from "readline";
import {promisify} from "util";

const existsPromisified = promisify(fs.exists);

class InputProcessor {
  public static async readLines(path: string): Promise<string[]> {
    const fileExists = await existsPromisified(path);
    if (!fileExists) {
      throw new Error("File doesn't exists.");
    }
    const input = fs.createReadStream(path);
    const readInterface = readline.createInterface({ input });

    return new Promise((resolve, reject) => {
      const lines: string[] = [];
      readInterface.on("line", (line) => lines.push(line));
      readInterface.on("close", () => resolve(lines));
      readInterface.on("error", (err) => reject(err));
    });
  }
}

export default InputProcessor;

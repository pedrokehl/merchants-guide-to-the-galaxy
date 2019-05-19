import fs from "fs";
import readline from "readline";

class FileProcessor {
  public static async readFileLines(path: string): Promise<string[]> {
    const readInterface = readline.createInterface({ input: fs.createReadStream(path) });
    const lines = [];

    for await (const line of readInterface) {
      lines.push(line);
    }
    return lines;
  }
}

export default FileProcessor;

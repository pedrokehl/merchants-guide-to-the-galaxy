import fs from "fs";
import readline from "readline";

class InputProcessor {
  public static async readLines(path: string): Promise<string[]> {
    const readInterface = readline.createInterface({ input: fs.createReadStream(path) });
    const lines = [];

    for await (const line of readInterface) {
      lines.push(line);
    }
    return lines;
  }
}

export default InputProcessor;

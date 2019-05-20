import TransactionGuide from "./guide/transaction-guide";
import InputProcessor from "./io/input-processor";
import OutputProcessor from "./io/output-processor";
import CommandLineUtils from "./utils/command-line-utils";

async function run(): Promise<void> {
  try {
    const path = CommandLineUtils.getArgument("path") || "./input.txt";
    const lines = await InputProcessor.readLines(path);
    const results = new TransactionGuide(lines).process();
    OutputProcessor.writeLines(results);
  } catch (e) {
    console.error(e.message);
  }
}

run();

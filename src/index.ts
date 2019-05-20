import TransactionGuide from "./guide/transaction-guide";
import InputProcessor from "./io/input-processor";
import OutputProcessor from "./io/output-processor";
import CommandLineUtils from "./utils/command-line-utils";

async function run(): Promise<void> {
  try {
    const path = CommandLineUtils.getArgument("path") || "./inputs/input.txt";
    const lines = await InputProcessor.readLines(path);
    const transactionGuide = new TransactionGuide(lines);
    transactionGuide.process();
    const results = transactionGuide.getAnswers();
    OutputProcessor.writeLines(results);
  } catch (e) {
    console.error(e.message);
  }
}

run();

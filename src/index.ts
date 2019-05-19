import GuideProcessor from "./guide-processor";
import FileProcessor from "./io/file-processor";
import OutputProcessor from "./io/output-processor";

async function run(): Promise<void> {
  try {
    const lines = await FileProcessor.readFileLines("./input.txt");
    const results = new GuideProcessor(lines).process();
    OutputProcessor.writeLines(results);
  } catch (e) {
    console.error(e.message);
  }
}

run();

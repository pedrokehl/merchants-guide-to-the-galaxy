import GuideProcessor from "./guide-processor";
import FileProcessor from "./io/file-processor";

async function run(): Promise<void> {
  try {
    const lines = await FileProcessor.readFileLines("./input.txt");
    new GuideProcessor(lines).process();
  } catch (e) {
    console.error(e.message);
  }
}

run();

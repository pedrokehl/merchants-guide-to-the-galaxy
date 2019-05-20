import GuideProcessor from "./guide-processor";
import InputProcessor from "./io/input-processor";
import OutputProcessor from "./io/output-processor";

async function run(): Promise<void> {
  try {
    const lines = await InputProcessor.readLines("./input.txt");
    const results = new GuideProcessor(lines).process();
    OutputProcessor.writeLines(results);
  } catch (e) {
    console.error(e.message);
  }
}

run();

class OutputProcessor {
  public static writeLines(lines: string[]): void {
    lines.forEach((line) => {
      console.log(line);
    });
  }
}

export default OutputProcessor;

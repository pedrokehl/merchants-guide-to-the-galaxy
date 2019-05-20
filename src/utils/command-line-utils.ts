class CommandLineUtils {
  public static getArgument(argumentName: string): string {
    const args = process.argv;
    const argumentPrefix = `${argumentName}=`;
    const value = args.find((argument) => argument.startsWith(argumentPrefix));

    if (!value) {
      return;
    }

    return value.replace(argumentPrefix, "");
  }
}

export default CommandLineUtils;

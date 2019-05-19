const RomanNumerals = new Map([
    ["I", 1],
    ["V", 5],
    ["X", 10],
    ["L", 50],
    ["C", 100],
    ["D", 500],
    ["M", 1000],
]);

class RomanConverter {
  public static regexValidator = /^M{0,4}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$|^\d+$/;

  public static convertToNumber(romanNumberSymbol: string): number {

    if (!RomanConverter.regexValidator.test(romanNumberSymbol)) {
      throw new Error("Invalid Roman symbol");
    }

    const arrayOfChars = romanNumberSymbol.split("");

    let lastSymbolValue = 0;

    return arrayOfChars.reduceRight((sum: number, char: string) => {
      const currentSymbolValue = RomanNumerals.get(char);

      if (currentSymbolValue >= lastSymbolValue) {
        sum += currentSymbolValue;
      } else {
        sum -= currentSymbolValue;
      }
      lastSymbolValue = currentSymbolValue;
      return sum;
    }, 0);
  }
}

export default RomanConverter;

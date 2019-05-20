import intergalacticUnitsRepository from "../repositories/intergalactic-units-repository";
import RomanConverter from "./roman-converter";

class IntergalacticUnitConverter {
  public static convertToRoman(intergalacticUnit: string): string {
    const chars = intergalacticUnit.split(" ");
    return chars.reduce((acc, char) => {
      const romanValue = intergalacticUnitsRepository.get(char);
      if (!romanValue) {
        throw new Error("Invalid intergalactic unit");
      }
      return `${acc}${romanValue}`;
    }, "");
  }

  public static convertToDecimal(intergalacticUnit: string): number {
    const romanNumeral = IntergalacticUnitConverter.convertToRoman(intergalacticUnit);
    return RomanConverter.convertToNumber(romanNumeral);
  }
}

export default IntergalacticUnitConverter;

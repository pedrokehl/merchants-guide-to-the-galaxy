import GuideConstants from "./guide-constants";
import Note from "./note";

class PriceRule implements Note {

  public static validate(typedNote: string): boolean {
    return GuideConstants.identifyNoteRegex.priceRule.test(typedNote);
  }

  public product: string;
  public credits: number;
  public intergalacticUnits: string[];
  public readonly typedNote: string;

  constructor(typedNote: string) {
    this.typedNote = typedNote;
    this.process();
  }

  public process(): void {
    const regexResult = this.typedNote.match(GuideConstants.identifyNoteRegex.priceRule);
    this.product = regexResult.groups.product;
    this.credits = parseInt(regexResult.groups.value);
    this.intergalacticUnits = regexResult.groups.intergalacticUnits.split(" ");
  }

  public calculateProductPrice(intergalacticUnitsMap: Map<string, number>): number {
    const amountOfProduct = this.intergalacticUnits.reduce((sum: number, intergalacticUnitName: string) => {
      const intergalacticUnitValue = intergalacticUnitsMap.get(intergalacticUnitName);
      return sum + intergalacticUnitValue;
    }, 0);
    return this.credits / amountOfProduct;
  }
}

export default PriceRule;

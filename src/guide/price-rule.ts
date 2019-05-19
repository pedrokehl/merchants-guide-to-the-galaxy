import GuideConstants from "./guide-constants";
import Note from "./note";

class PriceRule implements Note {

  public static validate(typedNote: string): boolean {
    return GuideConstants.identifyNoteRegex.priceRule.test(typedNote);
  }

  public product: string;
  public value: number;
  public intergalacticUnits: string[];
  public readonly typedNote: string;

  constructor(typedNote: string) {
    this.typedNote = typedNote;
    this.process();
  }

  public process(): void {
    const regexResult = this.typedNote.match(GuideConstants.identifyNoteRegex.priceRule);
    this.product = regexResult.groups.product;
    this.value = parseInt(regexResult.groups.value);
    this.intergalacticUnits = regexResult.groups.intergalacticUnits.split(" ");
  }
}

export default PriceRule;

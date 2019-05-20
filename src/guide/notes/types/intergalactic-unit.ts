import intergalacticUnitsRepository from "../../../repositories/intergalactic-units-repository";

import RomanConverter from "../../../utils/roman-converter";
import GuideConstants from "../../guide-constants";
import Note from "../note";

class IntergalacticUnit implements Note {
  public readonly typedNote: string;
  public name: string;
  public decimal: number;
  public romanNumeral: string;

  constructor(typedNote: string) {
    this.typedNote = typedNote;
    this.onCreate();
  }

  public process(): void {
    intergalacticUnitsRepository.set(this.name, this.romanNumeral);
  }

  private onCreate(): void {
    const regexResult = this.typedNote.match(GuideConstants.groupingRegex.intergalacticUnit);
    this.name = regexResult.groups.intergalacticUnit;
    this.romanNumeral = regexResult.groups.romanNumeral;
    this.decimal = RomanConverter.convertToNumber(this.romanNumeral);
  }
}

export default IntergalacticUnit;

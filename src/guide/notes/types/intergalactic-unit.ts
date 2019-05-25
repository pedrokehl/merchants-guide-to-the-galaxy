import intergalacticUnitsRepository from "../../../repositories/intergalactic-units-repository";

import RomanConverter from "../../../utils/roman-converter";
import GuideConstants from "../../guide-constants";
import Note from "../note";

class IntergalacticUnit implements Note {
  private name: string;
  private decimal: number;
  private romanNumeral: string;

  constructor(public readonly typedNote: string) {
    this.interpretTypedNote();
  }

  public process(): void {
    intergalacticUnitsRepository.set(this.name, this.romanNumeral);
  }

  private interpretTypedNote(): void {
    const regexResult = this.typedNote.match(GuideConstants.groupingRegex.intergalacticUnit);
    this.name = regexResult.groups.intergalacticUnit;
    this.romanNumeral = regexResult.groups.romanNumeral;
    this.decimal = RomanConverter.convertToNumber(this.romanNumeral);
  }
}

export default IntergalacticUnit;

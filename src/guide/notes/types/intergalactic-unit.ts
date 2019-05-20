import intergalacticUnitsRepository from "../../../repositories/intergalactic-units-repository";

import RomanConverter from "../../../utils/roman-converter";
import GuideConstants from "../../guide-constants";
import Note from "../note";

class IntergalacticUnit implements Note {

  public static validate(typedNote: string): boolean {
    return GuideConstants.identifyNoteRegex.intergalacticUnit.test(typedNote);
  }

  public typedNote: string;
  public name: string;
  public decimal: number;

  constructor(typedNote: string) {
    this.typedNote = typedNote;
    this.onCreate();
  }

  public process(): void {
    intergalacticUnitsRepository.set(this.name, this.decimal);
  }

  public onCreate(): void {
    const regexResult = this.typedNote.match(GuideConstants.identifyNoteRegex.intergalacticUnit);
    this.name = regexResult.groups.intergalacticUnit;
    const romanNumeral = regexResult.groups.romanNumeral;
    this.decimal = RomanConverter.convertToNumber(romanNumeral);
  }
}

export default IntergalacticUnit;

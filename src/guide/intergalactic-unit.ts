import RomanConverter from "../utils/RomanConverter";
import GuideConstants from "./guide-constants";
import Note from "./note";

class IntergalacticUnit implements Note {

  public static validate(typedNote: string): boolean {
    return GuideConstants.identifyNoteRegex.intergalacticUnit.test(typedNote);
  }

  public typedNote: string;
  public name: string;
  public value: number;

  constructor(typedNote: string) {
    this.typedNote = typedNote;
    this.process();
  }

  public process(): void {
    const regexResult = this.typedNote.match(GuideConstants.identifyNoteRegex.intergalacticUnit);
    this.name = regexResult.groups.intergalacticUnit;
    const romanNumerals = regexResult.groups.value;
    this.value = RomanConverter.convertToNumber(romanNumerals);
  }
}

export default IntergalacticUnit;

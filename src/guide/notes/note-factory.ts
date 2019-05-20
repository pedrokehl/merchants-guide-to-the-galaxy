import GuideConstants from "../guide-constants";
import Note from "./note";
import IntergalacticUnit from "./types/intergalactic-unit";
import PriceRule from "./types/price-rule";
import Question from "./types/question";

class NoteFactory {
  public static getNote(typedNote: string): Note {
    const NoteRegex = GuideConstants.identifyNoteRegex;

    if (NoteRegex.question.test(typedNote)) {
      return new Question(typedNote);
    } else if (NoteRegex.priceRule.test(typedNote)) {
      return new PriceRule(typedNote);
    } else if (NoteRegex.intergalacticUnit.test(typedNote)) {
      return new IntergalacticUnit(typedNote);
    } else {
      throw new Error("Invalid message");
    }
  }
}

export default NoteFactory;

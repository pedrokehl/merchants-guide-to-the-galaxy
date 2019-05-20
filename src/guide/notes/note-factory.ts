import Note from "./note";
import IntergalacticUnit from "./types/intergalactic-unit";
import PriceRule from "./types/price-rule";
import Question from "./types/question";

class NoteFactory {
  public static getNote(typedNote: string): Note {
    if (Question.validate(typedNote)) {
      return new Question(typedNote);
    } else if (PriceRule.validate(typedNote)) {
      return new PriceRule(typedNote);
    } else if (IntergalacticUnit.validate(typedNote)) {
      return new IntergalacticUnit(typedNote);
    } else {
      throw new Error("Invalid message");
    }
  }
}

export default NoteFactory;

import GuideConstants from "./guide-constants";
import Note from "./note";

class Question implements Note {

  public static validate(typedNote: string): boolean {
    return GuideConstants.identifyNoteRegex.question.test(typedNote);
  }

  public products: string[];
  public readonly typedNote: string;

  constructor(typedNote: string) {
    this.typedNote = typedNote;
    this.process();
  }

  public process(): void {
    this.products = [];
  }
}

export default Question;

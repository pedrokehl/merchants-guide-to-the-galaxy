import Note from "./notes/note";
import NoteFactory from "./notes/note-factory";
import Question from "./notes/types/question";

class TransactionGuide {
  private questions: Question[] = [];

  constructor() {
    this.getAnswers = this.getAnswers.bind(this);
    this.processMany = this.processMany.bind(this);
    this.processOne = this.processOne.bind(this);
  }

  public getAnswers(): string[] {
    return this.questions.map((question) => question.ask());
  }

  public processMany(typedNotes: string[]): Note[] {
    return typedNotes.map(this.processOne);
  }

  public processOne(typedNote: string): Note {
    const formattedTypedNote = typedNote.trim();
    const note = NoteFactory.getNote(formattedTypedNote);
    if (note instanceof Question) {
      this.questions.push(note);
    }
    note.process();
    return note;
  }
}

export default TransactionGuide;

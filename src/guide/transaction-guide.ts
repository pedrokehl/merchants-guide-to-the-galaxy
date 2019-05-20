import answersRepository from "../repositories/answers-repository";
import NoteFactory from "./notes/note-factory";

class TransactionGuide {
  private readonly typedNotes: string[];

  constructor(typedNotes: string[] = []) {
    this.typedNotes = typedNotes;
  }

  public process(): string[] {
    this.typedNotes.forEach((typedNote) => {
      const note = NoteFactory.getNote(typedNote.trim());
      note.process();
    });
    return answersRepository.getAllValues();
  }
}

export default TransactionGuide;

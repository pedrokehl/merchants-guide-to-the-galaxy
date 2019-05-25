import answersRepository from "../repositories/answers-repository";
import NoteFactory from "./notes/note-factory";

class TransactionGuide {
  public processMany(typedNotes: string[]): void {
    typedNotes.forEach(this.processOne);
  }

  public processOne(typedNote: string): void {
    const formattedTypedNote = typedNote.trim();
    const note = NoteFactory.getNote(formattedTypedNote);
    note.process();
  }

  public getAllOrderedAnswers(): string[] {
    return answersRepository.getAllValues();
  }
}

export default TransactionGuide;

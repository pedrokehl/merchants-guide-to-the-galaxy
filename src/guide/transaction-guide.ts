import NoteFactory from "./notes/note-factory";
import Question from "./notes/types/question";

class TransactionGuide {
  private answers: string[] = [];
  private intergalacticUnitsMap: Map<string, number> = new Map();
  private productsMap: Map<string, number> = new Map();

  public processNote(typedNote: string): void {
    const note = NoteFactory.getNote(typedNote.trim());
    note.process();
  }

  public computeQuestion(question: Question): string {
    const answer = question.getAnswer(this.intergalacticUnitsMap, this.productsMap);
    this.answers.push(answer);
    return answer;
  }

  public getAnswers(): string[] {
    return this.answers;
  }
}

export default TransactionGuide;

import Question from "./guide/question";
import TransactionGuide from "./guide/transaction-guide";

class GuideProcessor {
  private typedNotes: string[];
  private transactionGuide: TransactionGuide;

  constructor(typedNotes: string[] = []) {
    this.typedNotes = typedNotes.map((typedNote) => typedNote.trim());

  }

  public process(): string[] {
    const rules = this.getRules();
    this.transactionGuide = new TransactionGuide(rules);
    this.transactionGuide.processRules();

    const questions = this.getQuestions();
    return questions.map(this.transactionGuide.query);
  }

  private getRules(): string[] {
    return this.typedNotes
      .filter((typedNote) => !typedNote.endsWith("?"));
  }

  private getQuestions(): Question[] {
    return this.typedNotes
      .filter((typedNote) => typedNote.endsWith("?"))
      .map((typedQuestion) => new Question(typedQuestion));
  }
}

export default GuideProcessor;

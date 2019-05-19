import TransactionGuide from "./guide/transaction-guide";

class GuideProcessor {
  private readonly typedNotes: string[];
  private transactionGuide: TransactionGuide;

  constructor(typedNotes: string[] = []) {
    this.typedNotes = typedNotes;
  }

  public process(): string[] {
    this.transactionGuide = new TransactionGuide();
    this.typedNotes.forEach((typedNote) => this.transactionGuide.processNote(typedNote));
    return this.transactionGuide.getAnswers();
  }
}

export default GuideProcessor;

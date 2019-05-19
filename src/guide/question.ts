class Question {
  public products: string[];
  private readonly typedNote: string;

  constructor(typedNote: string) {
    this.typedNote = typedNote;
    this.process();
  }

  private process(): void {
    this.products = [];
  }
}

export default Question;

import Question from "./question";
import TransactionConstants from "./transaction-constant";

class TransactionGuide {
  private readonly rules: string[];
  private products: Map<string, number>;

  constructor(rules: string[]) {
    this.rules = rules;
    this.processRules = this.processRules.bind(this);
    this.query = this.query.bind(this);
  }

  public processRules(): void {
    const validatedRules = this.validateAndFormatRules();
    console.log(validatedRules);
  }

  // TODO
  public query(question: Question): string {
    return "";
  }

  private validateAndFormatRules(): any[] {
    return this.rules
      .map((rule) => rule.match(TransactionConstants.ruleRegex))
      .filter((rule) => Array.isArray(rule))
      .map((rule) => rule.groups);
  }
}

export default TransactionGuide;

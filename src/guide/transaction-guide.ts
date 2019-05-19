import IntergalacticUnit from "./intergalactic-unit";
import PriceRule from "./price-rule";
import Question from "./question";

import GuideConstants from "./guide-constants";

class TransactionGuide {
  private answers: string[] = [];
  private intergalacticUnits: Map<string, number> = new Map();
  private products: Map<string, number>;

  public processNote(typedNote: string): void {
    const formattedTypedNote = typedNote.trim();

    if (Question.validate(formattedTypedNote)) {
      const question = new Question(formattedTypedNote);
      this.computeQuestion(question);
    } else if (PriceRule.validate(formattedTypedNote)) {
      const priceRule = new PriceRule(formattedTypedNote);
      this.computePriceRule(priceRule);
    } else if (IntergalacticUnit.validate(formattedTypedNote)) {
      const intergalacticUnit = new IntergalacticUnit(formattedTypedNote);
      this.computeIntergalacticUnit(intergalacticUnit);
    } else {
      this.answers.push(GuideConstants.unknownNoteAnswer);
    }
  }

  public computeIntergalacticUnit(intergalacticUnit: IntergalacticUnit): void {
    this.intergalacticUnits.set(intergalacticUnit.name, intergalacticUnit.value);
  }

  public computePriceRule(priceRule: PriceRule): void {
    const value = "";
  }

  public computeQuestion(question: Question): void {

  }

  public getAnswers(): string[] {
    return this.answers;
  }
}

export default TransactionGuide;

import IntergalacticUnit from "./intergalactic-unit";
import PriceRule from "./price-rule";
import Question from "./question";

import GuideConstants from "./guide-constants";

class TransactionGuide {
  private answers: string[] = [];
  private intergalacticUnitsMap: Map<string, number> = new Map();
  private productsMap: Map<string, number> = new Map();

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
    this.intergalacticUnitsMap.set(intergalacticUnit.name, intergalacticUnit.decimal);
  }

  public computePriceRule(priceRule: PriceRule): void {
    const productPrice = priceRule.calculateProductPrice(this.intergalacticUnitsMap);
    this.productsMap.set(priceRule.product, productPrice);
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

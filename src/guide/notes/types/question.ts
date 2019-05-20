import answersRepository from "../../../repositories/answers-repository";
import productsRepository from "../../../repositories/products-repository";
import IntergalacticUnitConverter from "../../../utils/intergalactic-unit-converter";

import GuideConstants from "../../guide-constants";
import Note from "../note";

class Question implements Note {
  public readonly typedNote: string;
  public answer: string;
  public isCreditsQuestion: boolean;
  public keywordsString: string;

  constructor(typedNote?: string) {
    this.typedNote = typedNote;
    this.onCreate();
  }

  public process(): void {
    answersRepository.set(this.typedNote, this.answer);
  }

  private onCreate(): void {
    const regexResult = this.typedNote.match(GuideConstants.groupingRegex.question);
    if (!regexResult) {
      this.answer = this.getInvalidQuestion();
      return;
    }

    this.isCreditsQuestion = !!regexResult.groups.isCredits;
    this.keywordsString = regexResult.groups.keywords.trim();
    this.answer = this.formatAnswerForValidQuestion();
  }

  private formatAnswerForValidQuestion(): string {
    const keywordsArray = this.keywordsString.split(" ");
    const intergalacticUnits = [...keywordsArray];
    let suffix = "";
    let productPrice = null;
    let intergalacticUnitsValue = null;

    if (this.isCreditsQuestion) {
      suffix = " Credits";
      const productName = intergalacticUnits.pop();
      productPrice = productsRepository.get(productName);

      if (typeof productPrice !== "number") {
        return this.getInvalidQuestion();
      }
    }

    const intergalacticUnitsString = intergalacticUnits.join(" ");

    try {
      intergalacticUnitsValue = IntergalacticUnitConverter.convertToDecimal(intergalacticUnitsString);
    } catch {
      return this.getInvalidQuestion();
    }

    const value = this.isCreditsQuestion
      ? intergalacticUnitsValue * productPrice
      : intergalacticUnitsValue;

    return `${this.keywordsString.trim()} is ${value}${suffix}`;
  }

  private getInvalidQuestion(): string {
    return GuideConstants.unknownNoteAnswer;
  }
}

export default Question;

import answersRepository from "../../../repositories/answers-repository";
import productsRepository from "../../../repositories/products-repository";
import IntergalacticUnitConverter from "../../../utils/intergalactic-unit-converter";

import GuideConstants from "../../guide-constants";
import Note from "../note";

class Question implements Note {
  private isCreditsQuestion: boolean;
  private keywordsString: string;
  private keywords: string[];
  private isValid: boolean;

  constructor(public readonly typedNote: string) {
    this.interpretTypedNote();
  }

  public process(): void {
    const answer = this.ask();
    answersRepository.set(this.typedNote, answer);
  }

  private interpretTypedNote(): void {
    const regexResult = this.typedNote.match(GuideConstants.groupingRegex.question);
    if (!regexResult) {
      this.isValid = false;
      return;
    }
    this.isCreditsQuestion = !!regexResult.groups.isCredits;
    this.keywordsString = regexResult.groups.keywords.trim();
    this.keywords = this.keywordsString.split(" ");
    this.isValid = true;
  }

  private ask(): string {
    if (!this.isValid) {
      return this.getInvalidQuestion();
    }

    return this.formatAnswerForValidQuestion(this.keywords);
  }

  private formatAnswerForValidQuestion(keywords: string[]): string {
    const suffix = this.isCreditsQuestion ? " Credits" : "";

    try {
      const value = this.isCreditsQuestion
        ? this.answerValueForCreditsQuestion(keywords)
        : this.getIntergalacticUnitsValue(keywords);

      return `${this.keywordsString} is ${value}${suffix}`;
    } catch (error) {
      return this.getInvalidQuestion();
    }
  }

  private answerValueForCreditsQuestion(keyWords: string[]): number {
    const productName = keyWords.pop();
    const productPrice = productsRepository.get(productName);

    if (productPrice === undefined) {
      throw new Error("Invalid product name");
    }

    const intergalacticUnitsValue = this.getIntergalacticUnitsValue(keyWords);
    return intergalacticUnitsValue * productPrice;
  }

  private getIntergalacticUnitsValue(intergalacticUnits: string[]): number {
    const intergalacticUnitsString = intergalacticUnits.join(" ");
    return IntergalacticUnitConverter.convertToDecimal(intergalacticUnitsString);
  }

  private getInvalidQuestion(): string {
    return GuideConstants.unknownNoteAnswer;
  }
}

export default Question;

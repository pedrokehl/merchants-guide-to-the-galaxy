import intergalacticUnitsRepository from "../../../repositories/intergalactic-units-repository";
import productsRepository from "../../../repositories/products";

import GuideConstants from "../../guide-constants";
import Note from "../note";

class PriceRule implements Note {

  public static validate(typedNote: string): boolean {
    return GuideConstants.identifyNoteRegex.priceRule.test(typedNote);
  }

  public product: string;
  public credits: number;
  public price: number;
  public units: string[];
  public readonly typedNote: string;

  constructor(typedNote: string) {
    this.typedNote = typedNote;
    this.onCreate();
  }

  public onCreate(): void {
    const regexResult = this.typedNote.match(GuideConstants.identifyNoteRegex.priceRule);
    this.product = regexResult.groups.product;
    this.credits = parseInt(regexResult.groups.value);
    this.units = regexResult.groups.intergalacticUnits.split(" ");
    this.price = this.calculateProductPrice();
  }

  public process(): void {
    productsRepository.set(this.product, this.price);
  }

  private calculateProductPrice(): number {
    const amountOfProduct = this.units.reduce((sum: number, intergalacticUnitName: string) => {
      const intergalacticUnitValue = intergalacticUnitsRepository.get(intergalacticUnitName);
      if (!intergalacticUnitValue) {
        throw new Error("Intergalactic Unit does not exists");
      }
      return sum + intergalacticUnitValue;
    }, 0);
    return this.credits / amountOfProduct;
  }
}

export default PriceRule;

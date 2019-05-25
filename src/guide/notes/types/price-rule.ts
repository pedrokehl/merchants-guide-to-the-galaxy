import productsRepository from "../../../repositories/products-repository";
import IntergalacticUnitConverter from "../../../utils/intergalactic-unit-converter";

import GuideConstants from "../../guide-constants";
import Note from "../note";

class PriceRule implements Note {
  private product: string;
  private credits: number;
  private units: string;

  constructor(public readonly typedNote: string) {
    this.interpretTypedNote();
  }

  public process(): void {
    const price = this.calculateProductPrice();
    productsRepository.set(this.product, price);
  }

  private calculateProductPrice(): number {
    const amountOfProduct = IntergalacticUnitConverter.convertToDecimal(this.units);
    return this.credits / amountOfProduct;
  }

  private interpretTypedNote(): void {
    const regexResult = this.typedNote.match(GuideConstants.groupingRegex.priceRule);
    this.product = regexResult.groups.product;
    this.credits = parseInt(regexResult.groups.value);
    this.units = regexResult.groups.intergalacticUnits.trim();
  }
}

export default PriceRule;

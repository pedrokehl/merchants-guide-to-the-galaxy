import productsRepository from "../../../repositories/products-repository";
import IntergalacticUnitConverter from "../../../utils/intergalactic-unit-converter";

import GuideConstants from "../../guide-constants";
import Note from "../note";

class PriceRule implements Note {
  public readonly typedNote: string;
  public product: string;
  public credits: number;
  public price: number;
  public units: string;

  constructor(typedNote: string) {
    this.typedNote = typedNote;
    this.onCreate();
  }

  public process(): void {
    productsRepository.set(this.product, this.price);
  }

  private calculateProductPrice(): number {
    const amountOfProduct = IntergalacticUnitConverter.convertToDecimal(this.units);
    return this.credits / amountOfProduct;
  }

  private onCreate(): void {
    const regexResult = this.typedNote.match(GuideConstants.groupingRegex.priceRule);
    this.product = regexResult.groups.product;
    this.credits = parseInt(regexResult.groups.value);
    this.units = regexResult.groups.intergalacticUnits.trim();
    this.price = this.calculateProductPrice();
  }
}

export default PriceRule;

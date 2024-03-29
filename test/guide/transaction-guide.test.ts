import GuideConstants from "../../src/guide/guide-constants";
import TransactionGuide from "../../src/guide/transaction-guide";
import intergalacticUnitsRepository from "../../src/repositories/intergalactic-units-repository";
import productsRepository from "../../src/repositories/products-repository";

afterEach(() => {
  intergalacticUnitsRepository.data.clear();
  productsRepository.data.clear();
});

describe("Transaction Guide - Full scenario", () => {
  test("Should work fine with the example scenario", () => {
    const input = [
      "glob is I",
      "prok is V",
      "pish is X",
      "tegj is L",
      "glob glob Silver is 34 Credits",
      "glob prok Gold is 57800 Credits",
      "pish pish Iron is 3910 Credits",
      "how much is pish tegj glob glob ?",
      "how many Credits is glob prok Silver ?",
      "how many Credits is glob prok Gold ?",
      "how many Credits is glob prok Iron ?",
      "how much wood could a woodchuck chuck if a woodchuck could chuck wood ?",
    ];
    const transactionGuide = new TransactionGuide();
    transactionGuide.processMany(input);
    const result = transactionGuide.getAnswers();
    const expectedOutput = [
      "pish tegj glob glob is 42",
      "glob prok Silver is 68 Credits",
      "glob prok Gold is 57800 Credits",
      "glob prok Iron is 782 Credits",
      GuideConstants.unknownNoteAnswer,
    ];
    expect(result).toStrictEqual(expectedOutput);
  });

  test("Should result in the default invalid query message if there's not enough information to answer", () => {
    const invalidInput = [
      "how much is pish tegj glob glob ?",
    ];
    const transactionGuide = new TransactionGuide();
    transactionGuide.processMany(invalidInput);
    const result = transactionGuide.getAnswers();
    const expectedOutput = [
      GuideConstants.unknownNoteAnswer,
    ];
    expect(result).toStrictEqual(expectedOutput);
  });

  test("Should result in the default invalid query message if no product specified with queried name", () => {
    const invalidInput = [
      "glob is I",
      "glob Silver is 34 Credits",
      "how many Credits is glob glob Sand ?",
    ];
    const transactionGuide = new TransactionGuide();
    transactionGuide.processMany(invalidInput);
    const result = transactionGuide.getAnswers();
    const expectedOutput = [
      GuideConstants.unknownNoteAnswer,
    ];
    expect(result).toStrictEqual(expectedOutput);
  });

  test("Should not fail if no notes provided", () => {
    const transactionGuide = new TransactionGuide();
    const result = transactionGuide.getAnswers();
    expect(result).toStrictEqual([]);
  });

  test("Should throw an error if informed an invalid message", () => {
    expect(() => {
      const invalidInput = [
        "An invalid message",
      ];
      const transactionGuide = new TransactionGuide();
      transactionGuide.processMany(invalidInput);
    }).toThrow("Invalid message");
  });
});

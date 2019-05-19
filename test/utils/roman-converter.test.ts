import RomanConverter from "../../src/utils/roman-converter";

describe("convertToNumber", () => {
  test("Should combine the ordered in the common way", () => {
    expect(RomanConverter.convertToNumber("MMVI")).toBe(2006);
    expect(RomanConverter.convertToNumber("MM")).toBe(2000);
  });

  test("Should combine the symbols and subtract if before a bigger one", () => {
    expect(RomanConverter.convertToNumber("MMIV")).toBe(2004);
  });

  test("Should combine the symbols and subtract multiples if before a bigger one", () => {
    expect(RomanConverter.convertToNumber("XLIX")).toBe(49);
    expect(RomanConverter.convertToNumber("XCIX")).toBe(99);
    expect(RomanConverter.convertToNumber("CMXCIX")).toBe(999);
  });

  test("Should throw an error if trying to convert roman symbols in an invalid order", () => {
    expect(() => {
      RomanConverter.convertToNumber("IVM");
    }).toThrow("Invalid Roman symbol");
  });

  test("Should throw an error if trying to convert an invalid symbol", () => {
    expect(() => {
      RomanConverter.convertToNumber("P");
    }).toThrow("Invalid Roman symbol");
  });
});

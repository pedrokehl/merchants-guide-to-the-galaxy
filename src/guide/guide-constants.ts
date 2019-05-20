const intergalacticUnitRegex = /(?<intergalacticUnit>.+) is (?<romanNumeral>\w+)/i;
const priceRuleRegex = /(?<intergalacticUnits>.+) (?<product>\w+) is (?<value>\d+)( credits)/i;

const GuideConstants = {
  groupingRegex: {
    intergalacticUnit: intergalacticUnitRegex,
    priceRule: priceRuleRegex,
    question: /(how many|how much)\s*(?<isCredits>Credits)? is (?<keywords>.*)\s?\?/i,
  },
  identifyNoteRegex: {
    intergalacticUnit: intergalacticUnitRegex,
    priceRule: priceRuleRegex,
    question: /.+\?/,
  },
  unknownNoteAnswer: "I have no idea what you are talking about",
};

export default GuideConstants;

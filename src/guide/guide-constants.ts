const GuideConstants = {
  identifyNoteRegex: {
    intergalacticUnit: /(?<intergalacticUnit>.+) is (?<romanNumeral>\w+)/,
    priceRule: /(?<intergalacticUnits>.+) (?<product>\w+) is (?<value>\d+)( Credits)/,
    question: /.+\?/,
  },
  types: {
    rule: "rule",
  },
  unknownNoteAnswer: "I have no idea what you are talking about",
};

export default GuideConstants;

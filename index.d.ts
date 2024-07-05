declare module "hiragana-romazi-parser" {
  export interface Parser {
    text1: string[];
    text2: string[];
    kanaIdx: number;
    idx1: number;
    idx2: number;
    prevChar: string;
    parsedData: string[][];
    hiraganaTemp: string;
    temp: string;
    charCorrect: number;
    charMissed: number;
    sentenceCorrect: number;
    build: (text: string) => string[][];
    check: (parsedData: string[][]) => boolean | void;
    isFinished: (parsedData: string[][]) => boolean;
    colorTypedJapanese: () => string | void;
    colorTypedRoma: (parsedData: string[][], pattern: string[], idx1: number, idx2: number) => string;
    setData: (text1: string[], text2: string[]) => void;
  }
  export default parser;
}
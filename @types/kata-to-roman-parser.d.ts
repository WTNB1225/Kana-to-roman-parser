declare module "kata-to-roman-parser" {
  export interface Parser {
    text1: string[];
    text2: string[];
    kanaIdx: number;
    idx1: number;
    idx2: number;
    prevChar: string;
    parsedData: string[][];
    build: (text: string) => string[][];
    colorTypedJapanese: () => string | void;
    colorTypedRoma: (parsedData: string[][], pattern: string[], idx1: number, idx2: number) => string;
    setData: (text1: string[], text2: string[]) => void;
  }
  const parser: Parser;
  export default parser;
}
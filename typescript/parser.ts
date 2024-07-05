import { hiraganaMap as hiraganaMapFunction } from "./hiraganaMap.js";
import { romajiMap } from "./romajiMap.js";
const hiraganaMaps = hiraganaMapFunction();

class Parser {
  pattern: number[];
  idx1: number;
  idx2: number;
  kanaIdx: number;
  text1: string[];
  text2: string[];
  prevChar: string;
  parsedData: string[][];
  temp: string;  
  hiraganaTemp: string;
  charCorrect: number;
  charMissed: number;
  sentenceCorrect: number;

  constructor() {
    this.pattern = [];
    this.idx1 = 0;
    this.idx2 = 0;
    this.kanaIdx = 0;
    this.prevChar = "";
    this.parsedData;
    this.temp = "";
    this.hiraganaTemp = "";
    this.charCorrect = 0;
    this.charMissed = 0;
    this.sentenceCorrect = 0;
  }
  build(hiragana: string): string[][] {
    let three_letter: string;
    let two_letter: string;
    let one_letter: string;
    const map = romajiMap();
    const parsedData: string[][] = [];
    for (let i = 0; i < hiragana.length; i++) {
      three_letter = hiragana.slice(i, i + 3);
      two_letter = hiragana.slice(i, i + 2);
      one_letter = hiragana.slice(i, i + 1);
      if (map.get(three_letter)) {
        parsedData.push(map.get(three_letter) || [""]);
        i += 2;
      } else if (map.get(two_letter)) {
        parsedData.push(map.get(two_letter) || [""]);
        i += 1;
      } else if (map.get(one_letter)) {
        parsedData.push(map.get(one_letter) || [""]);
      }
    }
    const dom = document.getElementById("sentence");
    for (let i = 0; i < parsedData.length; i++) {
      for (let j = 0; j < parsedData[i][0].length; j++) {
        let span = document.createElement("span");
        span.textContent = parsedData[i][0][j];
        if(dom) {
          dom.appendChild(span);
        }
      }
    }
    this.pattern = new Array(parsedData.length).fill(0);

    this.parsedData = parsedData;
    return this.parsedData;
  }

  check(parsedData: string[][], key: string): boolean | void {
    const sentence = document.getElementById("sentence");
    const hiranagaSentence = document.getElementById("hiragana");
    let tempIdx = this.idx2
      const nextChar = parsedData[this.idx1][this.pattern[this.idx1]][tempIdx + 1];
      if (key == "Escape") {
        //エスケープキーが押されたときの処理
      } else {
        this.temp += key;
        if (key == parsedData[this.idx1][this.pattern[this.idx1]][this.idx2]) {
          this.hiraganaTemp += key;
          if (sentence){
            sentence.innerHTML = this.colorTypedRoma(parsedData, this.pattern, this.idx1, this.idx2) || "";
          }
          if (hiraganaMaps.get(JSON.stringify(this.hiraganaTemp)) && hiraganaMaps.get(JSON.stringify(this.hiraganaTemp))?.length == 2) {
            if(hiranagaSentence) {
              hiranagaSentence.innerHTML = this.colorTypedJapanese() || "";
              this.kanaIdx++;
              hiranagaSentence.innerHTML = this.colorTypedJapanese() || "";
              this.kanaIdx++;
              this.hiraganaTemp = "";
            }
          } else if (hiraganaMaps.get(JSON.stringify(this.hiraganaTemp)) && hiraganaMaps.get(JSON.stringify(this.hiraganaTemp))?.length == 1) {
            if(hiranagaSentence) {
              hiranagaSentence.innerHTML = this.colorTypedJapanese() || "";
              this.kanaIdx++;
              this.hiraganaTemp = "";
            }
          } else if (hiraganaMaps.get(JSON.stringify(this.hiraganaTemp)) && hiraganaMaps.get(JSON.stringify(this.hiraganaTemp))?.length == 3) {
            if(hiranagaSentence) {
              hiranagaSentence.innerHTML = this.colorTypedJapanese() || "";
              this.kanaIdx++;
              hiranagaSentence.innerHTML = this.colorTypedJapanese() || "";
              this.kanaIdx++;
              hiranagaSentence.innerHTML = this.colorTypedJapanese() || "";
              this.kanaIdx++;
              this.hiraganaTemp = "";
            }
          }else if(key == "n" && (this.prevChar == "n" || this.prevChar == "")) {
            this.prevChar = key;
          } else if (key == "n" &&
            (
              nextChar !== "a" &&
              nextChar !== "i" &&
              nextChar !== "u" &&
              nextChar !== "e" &&
              nextChar !== "o" &&
              nextChar !== "n"
            )
          ) {
            if(hiranagaSentence) {
              hiranagaSentence.innerHTML = this.colorTypedJapanese() || "";
              this.kanaIdx++;
              this.hiraganaTemp = "";
            }
          } else if (key == "n" && this.prevChar == "n") {
            this.hiraganaTemp = "";
          }
          this.prevChar = key;
          this.idx2++;
          this.charCorrect++;
          if(this.idx2 !== this.parsedData[this.idx1][this.pattern[this.idx1]].length) {
            return true;
          }
          // 正しいキーが押されたときの処理
        } else {
          let reg = new RegExp("^" + this.temp);
          for (let i = 0; i < parsedData[this.idx1].length; i++) {
            if (parsedData[this.idx1][i].match(reg)) {
              this.pattern[this.idx1] = i;
              break;
            }
          }
          if (
            key == parsedData[this.idx1][this.pattern[this.idx1]][this.idx2]
          ) {
            this.hiraganaTemp += key;
            if (sentence) {
              sentence.innerHTML = this.colorTypedRoma(parsedData, this.pattern, this.idx1, this.idx2) || "";
            }
            if (hiraganaMaps.get(JSON.stringify(this.hiraganaTemp)) && hiraganaMaps.get(JSON.stringify(this.hiraganaTemp))?.length == 2) {
              if(hiranagaSentence) {
                hiranagaSentence.innerHTML = this.colorTypedJapanese() || "";
                this.kanaIdx++;
                hiranagaSentence.innerHTML = this.colorTypedJapanese() || "";
                this.kanaIdx++;
                this.hiraganaTemp = "";
              }
            } else if ( hiraganaMaps.get(JSON.stringify(this.hiraganaTemp)) && hiraganaMaps.get(JSON.stringify(this.hiraganaTemp))?.length == 1) {
              if(hiranagaSentence) {
                hiranagaSentence.innerHTML = this.colorTypedJapanese() || "";
                this.kanaIdx++;
                this.hiraganaTemp = "";
              }
            } else if (hiraganaMaps.get(JSON.stringify(this.hiraganaTemp)) &&hiraganaMaps.get(JSON.stringify(this.hiraganaTemp))?.length == 3
            ) {
              if(hiranagaSentence) {
                hiranagaSentence.innerHTML = this.colorTypedJapanese() || "";
                this.kanaIdx++;
                hiranagaSentence.innerHTML = this.colorTypedJapanese() || "";
                this.kanaIdx++;
                hiranagaSentence.innerHTML = this.colorTypedJapanese() || "";
                this.kanaIdx++;
                this.hiraganaTemp = "";  
              }
            }else if(key == "n" && (this.prevChar == "n" || this.prevChar == "")) {
              this.prevChar = key;
              this.hiraganaTemp = "";
            } else if (
              key == "n" &&
              (
                nextChar !== "a" &&
                nextChar !== "i" &&
                nextChar !== "u" &&
                nextChar !== "e" &&
                nextChar !== "o" &&
                nextChar !== "n"
              ) 
            ) {
              if(hiranagaSentence) {
                hiranagaSentence.innerHTML = this.colorTypedJapanese() || "";
                this.kanaIdx++;
                this.hiraganaTemp = "";
              }
            } else if (key == "n" && this.prevChar == "n") {
              this.hiraganaTemp = "";
            }
            this.prevChar = key;
            this.idx2++;
            this.charCorrect++;
            if(this.idx2 !== this.parsedData[this.idx1][this.pattern[this.idx1]].length) {
              return true;
            }
          } else {
            this.temp = this.temp.slice(0, -1);
            this.charMissed++;
          }
        }
        if (this.idx2 == parsedData[this.idx1][this.pattern[this.idx1]].length) {
          if (this.idx1 == parsedData.length - 1) {
            sentence!.innerHTML = "";
          } else {
            this.idx1++;
            this.idx2 = 0;
            this.temp = "";
          }
        }
      }
  }

  isFinished(): boolean {
    if(this.idx2 == this.parsedData[this.idx1][this.pattern[this.idx1]].length && this.idx1 == this.parsedData.length - 1) {
      this.idx1 = 0;
      this.idx2 = 0;
      this.temp = "";
      this.hiraganaTemp = "";
      this.kanaIdx = 0;
      this.prevChar = "";
      this.pattern = [];
      this.parsedData = [];
      this.sentenceCorrect++;
      return true;
    } else {
      return false;
    }
  }

  colorTypedJapanese(): string | void {
    const hiranagaSentence = document.getElementById("hiragana");
    if (!hiranagaSentence) return;
    let str = hiranagaSentence.textContent;
    if (!str) return; //nullの場合は何もしない
    let html = "";
    html +=
      "<span class='typed'>" +
      str.slice(0, this.kanaIdx + 1) +
      "</span>" +
      "<span>" +
      str.slice(this.kanaIdx + 1) +
      "</span>";
    return html;
  }

  colorTypedRoma(parsedData: string[][], pattern: number[], idx1: number, idx2: number): string | void {
    let html = '<div><span class="typed">';
    if (idx1 > 0) {
      for (let i = 0; i < idx1; i++) {
        html += parsedData[i][pattern[i]];
      }
    }
    for (let i = 0; i <= idx2; i++) {
      html += parsedData[idx1][pattern[idx1]][i];
    }
    html += "</span><span>";
    for (let i = idx2 + 1; i < parsedData[idx1][pattern[idx1]].length; i++) {
      html += parsedData[idx1][pattern[idx1]][i];
    }
    for (let i = idx1 + 1; i < parsedData.length; i++) {
      html += parsedData[i][pattern[i]];
    }
    html += "</span></div>";
    return html;
  }

  setData(text1: string[], text2: string[]): void {
    //text1: 本文, text2:ひらがな
    this.text1 = text1;
    this.text2 = text2;
  }
}

export { Parser }
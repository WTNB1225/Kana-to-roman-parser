import { hiraganaMap as hiraganaMapFunction } from "./hiraganaMap.js";
import { romajiMap } from "./romajiMap.js";
const hiraganaMaps = hiraganaMapFunction();

interface Parser {
  build: (hiragana: string) => string[][];
  check: (parsedData: string[][]) => void;
  colorTypedJapanese: () => string | void;
  colorTypedRoma: (parsedData: string[][], pattern: number[], idx1: number, idx2: number) => string | void;
  setData: (text1: string[], text2: string[]) => void;
  pattern?: number[];
  idx1?: number;
  idx2?: number;
  kanaIdx?: number;
  text1?: string[];
  text2?: string[];
}

const parser: Parser = {
  build: function (hiragana: string) {
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

    return parsedData;
  },
  check: function (parsedData: string[][]) {
    const sentence = document.getElementById("sentence");
    const sentenceJP = document.getElementById("sentenceJP");
    const hiranagaSentence = document.getElementById("hiragana");
    this.idx1 = 0;
    this.idx2 = 0;
    this.kanaIdx = 0;
    this.prevChar = "";
    let temp = "";
    let hiraganaTemp = "";
    document.addEventListener("keydown", (event) => {
      let key = event.key;
      const nextChar = parsedData[this.idx1][this.pattern[this.idx1]][this.idx2 + 1];
      const secondNextChar = parsedData[this.idx1][this.pattern[this.idx1]][this.idx2 + 2];
      if (key == "Escape") {
        //エスケープキーが押されたときの処理
      } else {
        temp += key;
        if (key == parsedData[this.idx1][this.pattern[this.idx1]][this.idx2]) {
          hiraganaTemp += key;
          if (sentence){
            sentence.innerHTML = this.colorTypedRoma(parsedData, this.pattern, this.idx1, this.idx2);
          }
          if (hiraganaMaps.get(JSON.stringify(hiraganaTemp)) && hiraganaMaps.get(JSON.stringify(hiraganaTemp))?.length == 2) {
            if(hiranagaSentence) {
              hiranagaSentence.innerHTML = this.colorTypedJapanese();
              this.kanaIdx++;
              hiranagaSentence.innerHTML = this.colorTypedJapanese();
              this.kanaIdx++;
              hiraganaTemp = "";
            }
          } else if (hiraganaMaps.get(JSON.stringify(hiraganaTemp)) && hiraganaMaps.get(JSON.stringify(hiraganaTemp))?.length == 1) {
            if(hiranagaSentence) {
              hiranagaSentence.innerHTML = this.colorTypedJapanese();
              this.kanaIdx++;
              hiraganaTemp = "";
            }
          } else if (hiraganaMaps.get(JSON.stringify(hiraganaTemp)) && hiraganaMaps.get(JSON.stringify(hiraganaTemp))?.length == 3) {
            if(hiranagaSentence) {
              hiranagaSentence.innerHTML = this.colorTypedJapanese();
              this.kanaIdx++;
              hiranagaSentence.innerHTML = this.colorTypedJapanese();
              this.kanaIdx++;
              hiranagaSentence.innerHTML = this.colorTypedJapanese();
              this.kanaIdx++;
              hiraganaTemp = "";
            }
          }else if(key == "n" && (this.prevChar == "n" || this.prevChar == "")) {
            this.prevChar = key;
            hiraganaTemp = "";
          } else if (key == "n" &&
            (
              nextChar !== "a" &&
              nextChar !== "i" &&
              nextChar !== "u" &&
              nextChar !== "e" &&
              nextChar !== "o"
            ) &&
            (secondNextChar === "a" ||
              secondNextChar === "i" ||
              secondNextChar === "u" ||
              secondNextChar === "e" ||
              secondNextChar === "o")
          ) {
            if(hiranagaSentence) {
              hiranagaSentence.innerHTML = this.colorTypedJapanese();
              this.kanaIdx++;
              hiraganaTemp = "";
            }
          } else if (key == "n" && this.prevChar == "n") {
            hiraganaTemp = "";
          }
          this.prevChar = key;
          this.idx2++;
          // 正しいキーが押されたときの処理
        } else {
          let reg = new RegExp("^" + temp);
          for (let i = 0; i < parsedData[this.idx1].length; i++) {
            if (!!parsedData[this.idx1][i].match(reg)) {
              this.pattern[this.idx1] = i;
              break;
            }
          }
          if (
            key == parsedData[this.idx1][this.pattern[this.idx1]][this.idx2]
          ) {
            hiraganaTemp += key;
            if (sentence) {
              sentence.innerHTML = this.colorTypedRoma(parsedData, this.pattern, this.idx1, this.idx2 );
            }
            if (hiraganaMaps.get(JSON.stringify(hiraganaTemp)) && hiraganaMaps.get(JSON.stringify(hiraganaTemp))?.length == 2) {
              if(hiranagaSentence) {
                hiranagaSentence.innerHTML = this.colorTypedJapanese();
                this.kanaIdx++;
                hiranagaSentence.innerHTML = this.colorTypedJapanese();
                this.kanaIdx++;
                hiraganaTemp = "";
              }
            } else if ( hiraganaMaps.get(JSON.stringify(hiraganaTemp)) && hiraganaMaps.get(JSON.stringify(hiraganaTemp))?.length == 1) {
              if(hiranagaSentence) {
                hiranagaSentence.innerHTML = this.colorTypedJapanese();
                this.kanaIdx++;
                hiraganaTemp = "";
              }
            } else if (hiraganaMaps.get(JSON.stringify(hiraganaTemp)) &&hiraganaMaps.get(JSON.stringify(hiraganaTemp))?.length == 3
            ) {
              if(hiranagaSentence) {
                hiranagaSentence.innerHTML = this.colorTypedJapanese();
                this.kanaIdx++;
                hiranagaSentence.innerHTML = this.colorTypedJapanese();
                this.kanaIdx++;
                hiranagaSentence.innerHTML = this.colorTypedJapanese();
                this.kanaIdx++;
                hiraganaTemp = "";  
              }
            }else if(key == "n" && (this.prevChar == "n" || this.prevChar == "")) {
              this.prevChar = key;
              hiraganaTemp = "";
            } else if (
              key == "n" &&
              (
                nextChar !== "a" &&
                nextChar !== "i" &&
                nextChar !== "u" &&
                nextChar !== "e" &&
                nextChar !== "o"
              ) &&
              (secondNextChar === "a" ||
                secondNextChar === "i" ||
                secondNextChar === "u" ||
                secondNextChar === "e" ||
                secondNextChar === "o")
            ) {
              if(hiranagaSentence) {
                hiranagaSentence.innerHTML = this.colorTypedJapanese();
                this.kanaIdx++;
                hiraganaTemp = "";
              }
            } else if (key == "n" && this.prevChar == "n") {
              hiraganaTemp = "";
            }
            this.prevChar = key;
            this.idx2++;
          } else {
            temp = temp.slice(0, -1);
          }
        }
        if (this.idx2 == parsedData[this.idx1][this.pattern[this.idx1]].length) {
          if (this.idx1 == parsedData.length - 1) {
            if(sentence && hiranagaSentence && sentenceJP && parsedData) {
              sentence.innerHTML = "";
              this.idx1 = 0;
              this.idx2 = 0;
              this.kanaIdx = 0;
              temp = "";
              this.prevChar = "";
              parsedData = []; // Assign an empty array instead of null
              const randomNum = Math.floor(Math.random() * this.text2.length); // 0からtext2.length-1までの乱数を生成
              sentenceJP.textContent = this.text1[randomNum];
              hiranagaSentence.textContent = this.text2[randomNum];
              parsedData = this.build(this.text2[randomNum]);
            }
          } else {
            this.idx1++;
            this.idx2 = 0;
            temp = "";
          }
        }
      }
    });
  },
  colorTypedJapanese: function (): string | void{
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
  },
  colorTypedRoma: function (parsedData, pattern, idx1, idx2): string{
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
  },
  setData: function (text1, text2) {
    //text1: 本文, text2:ひらがな
    this.text1 = text1;
    this.text2 = text2;
  },
};

export { parser }
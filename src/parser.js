const hiranagaMap = hiranagaMaps();
const parser = {
  build: function (hiragana) {
    let three_letter;
    let two_letter;
    let one_letter;
    const map = maps();
    const parsedData = [];
    for (let i = 0; i < hiragana.length; i++) {
      three_letter = hiragana.slice(i, i + 3);
      two_letter = hiragana.slice(i, i + 2);
      one_letter = hiragana.slice(i, i + 1);
      if (map.get(three_letter)) {
        parsedData.push(map.get(three_letter));
        i += 2;
      } else if (map.get(two_letter)) {
        parsedData.push(map.get(two_letter));
        i += 1;
      } else if (map.get(one_letter)) {
        parsedData.push(map.get(one_letter));
      }
    }
    const dom = document.getElementById("sentence");
    for (let i = 0; i < parsedData.length; i++) {
      for (let j = 0; j < parsedData[i][0].length; j++) {
        let span = document.createElement("span");
        span.textContent = parsedData[i][0][j];
        dom.appendChild(span);
      }
    }
    this.pattern = new Array(parsedData.length).fill(0);

    return hiragana, parsedData;
  },
  check: function (parsedData) {
    const sentence = document.getElementById("sentence");
    const sentenceJP = document.getElementById("sentenceJP");
    const hiranagaSentence = document.getElementById("hiragana");
    this.idx1 = 0;
    this.idx2 = 0;
    this.kanaIdx = 0;
    let temp = "";
    let hiraganaTemp = "";
    document.addEventListener("keydown", (event) => {
      let key = event.key;
      const nextChar = parsedData[this.idx1][this.pattern[this.idx1]][this.idx2 + 1];
      const secondNextChar = parsedData[this.idx1][this.pattern[this.idx1]][this.idx2 + 2];
      const prevChar = parsedData[this.idx1][this.pattern[this.idx1]][this.idx2 - 1];
      if (key == "Escape") {
        //エスケープキーが押されたときの処理
      } else {
        temp += key;
        hiraganaTemp += key;
        if (key == parsedData[this.idx1][this.pattern[this.idx1]][this.idx2]) {
          sentence.innerHTML = this.colorTypedRoma(parsedData, this.pattern, this.idx1, this.idx2);
          if ( hiranagaMap.get(JSON.stringify([hiraganaTemp])) && hiranagaMap.get(JSON.stringify([hiraganaTemp])).length == 2) {
            hiranagaSentence.innerHTML = this.colorTypedJapanese();
            this.kanaIdx++;
            hiranagaSentence.innerHTML = this.colorTypedJapanese();
            this.kanaIdx++;
            hiraganaTemp = "";
          } else if (hiranagaMap.get(JSON.stringify([hiraganaTemp])) && hiranagaMap.get(JSON.stringify([hiraganaTemp])).length == 1) {
            hiranagaSentence.innerHTML = this.colorTypedJapanese();
            this.kanaIdx++;
            hiraganaTemp = "";
          } else if (hiranagaMap.get(JSON.stringify([hiraganaTemp])) && hiranagaMap.get(JSON.stringify([hiraganaTemp])).length == 3) {
            hiranagaSentence.innerHTML = this.colorTypedJapanese();
            this.kanaIdx++;
            hiranagaSentence.innerHTML = this.colorTypedJapanese();
            this.kanaIdx++;
            hiranagaSentence.innerHTML = this.colorTypedJapanese();
            this.kanaIdx++;
            hiraganaTemp = "";
          } else if (key == "n" &&
            !(
              nextChar === "a" ||
              nextChar === "i" ||
              nextChar === "u" ||
              nextChar === "e" ||
              nextChar === "o"
            ) &&
            (secondNextChar === "a" ||
              secondNextChar === "i" ||
              secondNextChar === "u" ||
              secondNextChar === "e" ||
              secondNextChar === "o")
          ) {
            hiranagaSentence.innerHTML = this.colorTypedJapanese();
            this.kanaIdx++;
            hiraganaTemp = "";
          } else if (key == "n" && prevChar == "n") {
            hiraganaTemp = "";
          }
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
            sentence.innerHTML = this.colorTypedRoma(
              parsedData,
              this.pattern,
              this.idx1,
              this.idx2
            );
            if (hiranagaMap.get(JSON.stringify([hiraganaTemp])) && hiranagaMap.get(JSON.stringify([hiraganaTemp])).length == 2) {
              hiranagaSentence.innerHTML = this.colorTypedJapanese();
              this.kanaIdx++;
              hiranagaSentence.innerHTML = this.colorTypedJapanese();
              this.kanaIdx++;
              hiraganaTemp = "";
            } else if ( hiranagaMap.get(JSON.stringify([hiraganaTemp])) && hiranagaMap.get(JSON.stringify([hiraganaTemp])).length == 1) {
              hiranagaSentence.innerHTML = this.colorTypedJapanese();
              this.kanaIdx++;
              hiraganaTemp = "";
            } else if (hiranagaMap.get(JSON.stringify([hiraganaTemp])) &&hiranagaMap.get(JSON.stringify([hiraganaTemp])).length == 3
            ) {
              hiranagaSentence.innerHTML = this.colorTypedJapanese();
              this.kanaIdx++;
              hiranagaSentence.innerHTML = this.colorTypedJapanese();
              this.kanaIdx++;
              hiranagaSentence.innerHTML = this.colorTypedJapanese();
              this.kanaIdx++;
              hiraganaTemp = "";
            } else if (
              key == "n" &&
              !(
                nextChar === "a" ||
                nextChar === "i" ||
                nextChar === "u" ||
                nextChar === "e" ||
                nextChar === "o"
              ) &&
              (secondNextChar === "a" ||
                secondNextChar === "i" ||
                secondNextChar === "u" ||
                secondNextChar === "e" ||
                secondNextChar === "o")
            ) {
              hiranagaSentence.innerHTML = this.colorTypedJapanese();
              this.kanaIdx++;
              hiraganaTemp = "";
            } else if (key == "n" && prevChar == "n") {
              hiraganaTemp = "";
            }
            this.idx2++;
          } else {
            hiraganaTemp = "";
            temp = temp.slice(0, -1);
          }
        }
        if (this.idx2 == parsedData[this.idx1][this.pattern[this.idx1]].length) {
          if (this.idx1 == parsedData.length - 1) {
            sentence.innerHTML = "";
            this.idx1 = 0;
            this.idx2 = 0;
            this.kanaIdx = 0;
            temp = "";
            parsedData = temp;
            parsedData = null;
            randomNum = Math.floor(Math.random() * text2.length); // 0からtext2.length-1までの乱数を生成
            sentenceJP.textContent = text1[randomNum];
            hiranagaSentence.textContent = text2[randomNum];
            parsedData = this.build(text2[randomNum]);
            return true;
          } else {
            this.idx1++;
            this.idx2 = 0;
            temp = "";
          }
        }
      }
    });
  },
  colorTypedJapanese: function () {
    const hiranagaSentence = document.getElementById("hiragana");
    str = hiranagaSentence.textContent;
    html = "";
    html +=
      "<span class='typed'>" +
      str.slice(0, this.kanaIdx + 1) +
      "</span>" +
      "<span>" +
      str.slice(this.kanaIdx + 1) +
      "</span>";
    return html;
  },
  colorTypedRoma: function (parsedData, pattern, idx1, idx2) {
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

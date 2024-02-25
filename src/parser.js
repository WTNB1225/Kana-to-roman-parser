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
    document.addEventListener("keydown", (event) => {
      const nextChar =
        parsedData[this.idx1][this.pattern[this.idx1]][this.idx2 + 1];
      const secondNextChar =
        parsedData[this.idx1][this.pattern[this.idx1]][this.idx2 + 2];
      const prevChar =
        parsedData[this.idx1][this.pattern[this.idx1]][this.idx2 - 1];
      const secondPrevChar =
        parsedData[this.idx1][this.pattern[this.idx1]][this.idx2 - 2];
      let key = event.key;
      if (key == "Escape") {
      } else {
        temp += key;
        if (key == parsedData[this.idx1][this.pattern[this.idx1]][this.idx2]) {
          sentence.innerHTML = this.colorTypedRoma(
            parsedData,
            this.pattern,
            this.idx1,
            this.idx2
          );
          if (
            key == "a" ||
            key == "i" ||
            key == "u" ||
            key == "e" ||
            key == "o" ||
            key == "," ||
            key == "." ||
            key == " " ||
            key == "-"
          ) {
            if (
              prevChar !== "a" &&
              prevChar !== "i" &&
              prevChar !== "u" &&
              prevChar !== "e" &&
              prevChar !== "o" &&
              (secondPrevChar == "l" || secondPrevChar == "x")
            ) {
              hiranagaSentence.innerHTML = this.colorTypedJapanese();
              this.kanaIdx++;
              console.log("1");
            } else if(prevChar !== "a") {

            }else if (
              prevChar !== "a" &&
              prevChar !== "i" &&
              prevChar !== "u" &&
              prevChar !== "e" &&
              prevChar !== "o" &&
              secondPrevChar !== "a" &&
              secondPrevChar !== "i" &&
              secondPrevChar !== "u" &&
              secondPrevChar !== "e" &&
              secondPrevChar !== "o" &&
              prevChar !== undefined &&
              secondPrevChar !== undefined
            ) {
              hiranagaSentence.innerHTML = this.colorTypedJapanese();
              this.kanaIdx++;
              hiranagaSentence.innerHTML = this.colorTypedJapanese();
              this.kanaIdx++;
              console.log("2");
            } else {
              hiranagaSentence.innerHTML = this.colorTypedJapanese();
              this.kanaIdx++;
              console.log("3");
            }
          } else if (
            key == "n" &&
            parsedData[this.idx1][this.pattern[this.idx1]][this.idx2 - 1] == "n"
          ) {
            hiranagaSentence.innerHTML = this.colorTypedJapanese();
            this.kanaIdx++;
            console.log("4");
          } else if (key == "n" && prevChar == "x") {
            hiranagaSentence.innerHTML = this.colorTypedJapanese();
            this.kanaIdx++;
            console.log("5");
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
            console.log("6");
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
            if (
              key == "a" ||
              key == "i" ||
              key == "u" ||
              key == "e" ||
              key == "o" ||
              key == "," ||
              key == "." ||
              key == " " ||
              key == "-"
            ) {
              if (
                prevChar !== "a" &&
                prevChar !== "i" &&
                prevChar !== "u" &&
                prevChar !== "e" &&
                prevChar !== "o" &&
                secondPrevChar !== "a" &&
                secondPrevChar !== "i" &&
                secondPrevChar !== "u" &&
                secondPrevChar !== "e" &&
                secondPrevChar !== "o" &&
                prevChar !== undefined &&
                secondPrevChar !== undefined
              ) {
                hiranagaSentence.innerHTML = this.colorTypedJapanese();
                this.kanaIdx++;
                hiranagaSentence.innerHTML = this.colorTypedJapanese();
                this.kanaIdx++;
                console.log("7");
              } else {
                hiranagaSentence.innerHTML = this.colorTypedJapanese();
                this.kanaIdx++;
                console.log("8");
              }
            } else if (
              key == "n" &&
              parsedData[this.idx1][this.pattern[this.idx1]][this.idx2 + 1] ==
                "n"
            ) {
              hiranagaSentence.innerHTML = this.colorTypedJapanese();
              this.kanaIdx++;
              console.log("9");
            }
            this.idx2++;
          } else {
            temp = temp.slice(0, -1);
          }
        }
        if (
          this.idx2 == parsedData[this.idx1][this.pattern[this.idx1]].length
        ) {
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

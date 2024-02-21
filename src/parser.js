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
    console.log(this.pattern[0]);
    return parsedData;
  },
  check: function (parsedData) {
    const sentence = document.getElementById("sentence");
    let idx1 = 0;
    let idx2 = 0;
    let temp = "";
    let previousCandidates = [];
    document.addEventListener("keydown", (event) => {
      let key = event.key;
      if (key == "Escape") {
        // Escを押した場合
        // 何かの処理
      } else {
        temp += key;
        if (key == parsedData[idx1][this.pattern[idx1]][idx2]) {
          console.log("Ok");
          sentence.innerHTML = this.colorTyped(parsedData, this.pattern, idx1, idx2);
          idx2++;
          // 正しいキーが押されたときの処理
        } else {
          let reg = new RegExp("^" + temp);
          for (let i = 0; i < parsedData[idx1].length; i++) {
            if (!!parsedData[idx1][i].match(reg)) {
              this.pattern[idx1] = i;
              break;
            }
          }
          console.log(parsedData[idx1][0][0].length);
          if (key == parsedData[idx1][this.pattern[idx1]][idx2]) {
            sentence.innerHTML = this.colorTyped(
              parsedData,
              this.pattern,
              idx1,
              idx2
            );
            idx2++;
          } else {
            temp = temp.slice(0, -1);
          }
        }
        if (idx2 == parsedData[idx1][this.pattern[idx1]].length) {
          if (idx1 == parsedData.length - 1) {
            console.log("Finish");
          } else {
            idx1++;
            idx2 = 0;
            temp = "";
            previousCandidates = [];
          }
        }
      }
    });
  },
  colorTyped: function (parsedData, pattern, idx1, idx2) {
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
};

parser.check(parser.build("まっちょ"));
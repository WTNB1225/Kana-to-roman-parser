"use strict";
import { hiraganaMap as hiraganaMapFunction } from "./hiraganaMap.js";
import { romajiMap } from "./romajiMap.js";
const hiraganaMaps = hiraganaMapFunction();
var parser = {
    build: function (hiragana) {
        var three_letter;
        var two_letter;
        var one_letter;
        var map = romajiMap();
        var parsedData = [];
        for (var i = 0; i < hiragana.length; i++) {
            three_letter = hiragana.slice(i, i + 3);
            two_letter = hiragana.slice(i, i + 2);
            one_letter = hiragana.slice(i, i + 1);
            if (map.get(three_letter)) {
                parsedData.push(map.get(three_letter) || [""]);
                i += 2;
            }
            else if (map.get(two_letter)) {
                parsedData.push(map.get(two_letter) || [""]);
                i += 1;
            }
            else if (map.get(one_letter)) {
                parsedData.push(map.get(one_letter) || [""]);
            }
        }
        var dom = document.getElementById("sentence");
        for (var i = 0; i < parsedData.length; i++) {
            for (var j = 0; j < parsedData[i][0].length; j++) {
                var span = document.createElement("span");
                span.textContent = parsedData[i][0][j];
                if (dom) {
                    dom.appendChild(span);
                }
            }
        }
        this.pattern = new Array(parsedData.length).fill(0);
        return parsedData;
    },
    check: function (parsedData) {
        var _this = this;
        var sentence = document.getElementById("sentence");
        var sentenceJP = document.getElementById("sentenceJP");
        var hiranagaSentence = document.getElementById("hiragana");
        this.idx1 = 0;
        this.idx2 = 0;
        this.kanaIdx = 0;
        this.prevChar = "";
        var temp = "";
        var hiraganaTemp = "";
        document.addEventListener("keydown", function (event) {
            var _a, _b, _c, _d, _e, _f;
            var key = event.key;
            var nextChar = parsedData[_this.idx1][_this.pattern[_this.idx1]][_this.idx2 + 1];
            var secondNextChar = parsedData[_this.idx1][_this.pattern[_this.idx1]][_this.idx2 + 2]
            if (key == "Escape") {
                //エスケープキーが押されたときの処理
            }
            else {
                temp += key;
                if (key == parsedData[_this.idx1][_this.pattern[_this.idx1]][_this.idx2]) {
                    hiraganaTemp += key;
                    if (sentence) {
                        sentence.innerHTML = _this.colorTypedRoma(parsedData, _this.pattern, _this.idx1, _this.idx2);
                    }
                    if (hiraganaMaps.get(JSON.stringify(hiraganaTemp)) && ((_a = hiraganaMaps.get(JSON.stringify(hiraganaTemp))) === null || _a === void 0 ? void 0 : _a.length) == 2) {
                        if (hiranagaSentence) {
                            hiranagaSentence.innerHTML = _this.colorTypedJapanese();
                            _this.kanaIdx++;
                            hiranagaSentence.innerHTML = _this.colorTypedJapanese();
                            _this.kanaIdx++;
                            hiraganaTemp = "";
                        }
                    }
                    else if (hiraganaMaps.get(JSON.stringify(hiraganaTemp)) && ((_b = hiraganaMaps.get(JSON.stringify(hiraganaTemp))) === null || _b === void 0 ? void 0 : _b.length) == 1) {
                        if (hiranagaSentence) {
                            hiranagaSentence.innerHTML = _this.colorTypedJapanese();
                            _this.kanaIdx++;
                            hiraganaTemp = "";
                        }
                    }
                    else if (hiraganaMaps.get(JSON.stringify(hiraganaTemp)) && ((_c = hiraganaMaps.get(JSON.stringify(hiraganaTemp))) === null || _c === void 0 ? void 0 : _c.length) == 3) {
                        if (hiranagaSentence) {
                            hiranagaSentence.innerHTML = _this.colorTypedJapanese();
                            _this.kanaIdx++;
                            hiranagaSentence.innerHTML = _this.colorTypedJapanese();
                            _this.kanaIdx++;
                            hiranagaSentence.innerHTML = _this.colorTypedJapanese();
                            _this.kanaIdx++;
                            hiraganaTemp = "";
                        }
                    }
                    else if (key == "n" && (_this.prevChar == "n" || _this.prevChar == "")) {
                        this.prevChar = key;
                        hiraganaTemp = "";
                    }
                    else if (key == "n" &&
                        !(nextChar === "a" ||
                            nextChar === "i" ||
                            nextChar === "u" ||
                            nextChar === "e" ||
                            nextChar === "o") &&
                        (secondNextChar === "a" ||
                            secondNextChar === "i" ||
                            secondNextChar === "u" ||
                            secondNextChar === "e" ||
                            secondNextChar === "o")) {
                        if (hiranagaSentence) {
                            hiranagaSentence.innerHTML = _this.colorTypedJapanese();
                            _this.kanaIdx++;
                            hiraganaTemp = "";
                        }
                    }
                    else if (key == "n" && _this.prevChar == "n") {
                        hiraganaTemp = "";
                    }
                    _this.prevChar = key;
                    _this.idx2++;
                    // 正しいキーが押されたときの処理
                }
                else {
                    var reg = new RegExp("^" + temp);
                    for (var i = 0; i < parsedData[_this.idx1].length; i++) {
                        if (!!parsedData[_this.idx1][i].match(reg)) {
                            _this.pattern[_this.idx1] = i;
                            break;
                        }
                    }
                    if (key == parsedData[_this.idx1][_this.pattern[_this.idx1]][_this.idx2]) {
                        hiraganaTemp += key;
                        if (sentence) {
                            sentence.innerHTML = _this.colorTypedRoma(parsedData, _this.pattern, _this.idx1, _this.idx2);
                        }
                        if (hiraganaMaps.get(JSON.stringify(hiraganaTemp)) && ((_d = hiraganaMaps.get(JSON.stringify(hiraganaTemp))) === null || _d === void 0 ? void 0 : _d.length) == 2) {
                            if (hiranagaSentence) {
                                hiranagaSentence.innerHTML = _this.colorTypedJapanese();
                                _this.kanaIdx++;
                                hiranagaSentence.innerHTML = _this.colorTypedJapanese();
                                _this.kanaIdx++;
                                hiraganaTemp = "";
                            }
                        }
                        else if (hiraganaMaps.get(JSON.stringify(hiraganaTemp)) && ((_e = hiraganaMaps.get(JSON.stringify(hiraganaTemp))) === null || _e === void 0 ? void 0 : _e.length) == 1) {
                            if (hiranagaSentence) {
                                hiranagaSentence.innerHTML = _this.colorTypedJapanese();
                                _this.kanaIdx++;
                                hiraganaTemp = "";
                            }
                        }
                        else if (hiraganaMaps.get(JSON.stringify(hiraganaTemp)) && ((_f = hiraganaMaps.get(JSON.stringify(hiraganaTemp))) === null || _f === void 0 ? void 0 : _f.length) == 3) {
                            if (hiranagaSentence) {
                                hiranagaSentence.innerHTML = _this.colorTypedJapanese();
                                _this.kanaIdx++;
                                hiranagaSentence.innerHTML = _this.colorTypedJapanese();
                                _this.kanaIdx++;
                                hiranagaSentence.innerHTML = _this.colorTypedJapanese();
                                _this.kanaIdx++;
                                hiraganaTemp = "";
                            }
                        }
                        else if (key == "n" && (_this.prevChar == "n" || _this.prevChar == "")) {
                            this.prevChar = key;
                            hiraganaTemp = "";
                        }
                        else if (key == "n" &&
                            !(nextChar === "a" ||
                                nextChar === "i" ||
                                nextChar === "u" ||
                                nextChar === "e" ||
                                nextChar === "o") &&
                            (secondNextChar === "a" ||
                                secondNextChar === "i" ||
                                secondNextChar === "u" ||
                                secondNextChar === "e" ||
                                secondNextChar === "o")) {
                            if (hiranagaSentence) {
                                hiranagaSentence.innerHTML = _this.colorTypedJapanese();
                                _this.kanaIdx++;
                                hiraganaTemp = "";
                            }
                        }
                        else if (key == "n" && _this.prevChar == "n") {
                            hiraganaTemp = "";
                        }
                        _this.prevChar = key;
                        _this.idx2++;
                    }
                    else {
                        temp = temp.slice(0, -1);
                    }
                }
                if (_this.idx2 == parsedData[_this.idx1][_this.pattern[_this.idx1]].length) {
                    if (_this.idx1 == parsedData.length - 1) {
                        if (sentence && hiranagaSentence && sentenceJP && parsedData) {
                            sentence.innerHTML = "";
                            _this.idx1 = 0;
                            _this.idx2 = 0;
                            _this.kanaIdx = 0;
                            temp = "";
                            _this.prevChar = "";
                            parsedData = []; // Assign an empty array instead of null
                            var randomNum = Math.floor(Math.random() * _this.text2.length); // 0からtext2.length-1までの乱数を生成
                            sentenceJP.textContent = _this.text1[randomNum];
                            hiranagaSentence.textContent = _this.text2[randomNum];
                            parsedData = _this.build(_this.text2[randomNum]);
                        }
                    }
                    else {
                        _this.idx1++;
                        _this.idx2 = 0;
                        temp = "";
                        hiraganaTemp = "";
                    }
                }
            }
        });
    },
    colorTypedJapanese: function () {
        var hiranagaSentence = document.getElementById("hiragana");
        if (!hiranagaSentence)
            return;
        var str = hiranagaSentence.textContent;
        if (!str)
            return; //nullの場合は何もしない
        var html = "";
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
        var html = '<div><span class="typed">';
        if (idx1 > 0) {
            for (var i = 0; i < idx1; i++) {
                html += parsedData[i][pattern[i]];
            }
        }
        for (var i = 0; i <= idx2; i++) {
            html += parsedData[idx1][pattern[idx1]][i];
        }
        html += "</span><span>";
        for (var i = idx2 + 1; i < parsedData[idx1][pattern[idx1]].length; i++) {
            html += parsedData[idx1][pattern[idx1]][i];
        }
        for (var i = idx1 + 1; i < parsedData.length; i++) {
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
export {parser}

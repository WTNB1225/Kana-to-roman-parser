"use strict";
var __esModule = true;
var Parser = void 0;
import hiraganaMap_js_1 from "./hiraganaMap.js";
import romajiMap_js_1 from "./romajiMap.js";
var hiraganaMaps = hiraganaMap_js_1();
var Parser = /** @class */ (function () {
    function Parser() {
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
    Parser.prototype.build = function (hiragana) {
        var three_letter;
        var two_letter;
        var one_letter;
        var map = romajiMap_js_1();
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
        this.parsedData = parsedData;
        return this.parsedData;
    };
    Parser.prototype.check = function (parsedData, key) {
        var _a, _b, _c, _d, _e, _f;
        var sentence = document.getElementById("sentence");
        var hiranagaSentence = document.getElementById("hiragana");
        var tempIdx = this.idx2;
        var nextChar = parsedData[this.idx1][this.pattern[this.idx1]][tempIdx + 1];
        if (key == "Escape") {
            //エスケープキーが押されたときの処理
        }
        else {
            this.temp += key;
            if (key == parsedData[this.idx1][this.pattern[this.idx1]][this.idx2]) {
                this.hiraganaTemp += key;
                if (sentence) {
                    sentence.innerHTML = this.colorTypedRoma(parsedData, this.pattern, this.idx1, this.idx2) || "";
                }
                if (hiraganaMaps.get(JSON.stringify(this.hiraganaTemp)) && ((_a = hiraganaMaps.get(JSON.stringify(this.hiraganaTemp))) === null || _a === void 0 ? void 0 : _a.length) == 2) {
                    if (hiranagaSentence) {
                        hiranagaSentence.innerHTML = this.colorTypedJapanese() || "";
                        this.kanaIdx++;
                        hiranagaSentence.innerHTML = this.colorTypedJapanese() || "";
                        this.kanaIdx++;
                        this.hiraganaTemp = "";
                    }
                }
                else if (hiraganaMaps.get(JSON.stringify(this.hiraganaTemp)) && ((_b = hiraganaMaps.get(JSON.stringify(this.hiraganaTemp))) === null || _b === void 0 ? void 0 : _b.length) == 1) {
                    if (hiranagaSentence) {
                        hiranagaSentence.innerHTML = this.colorTypedJapanese() || "";
                        this.kanaIdx++;
                        this.hiraganaTemp = "";
                    }
                }
                else if (hiraganaMaps.get(JSON.stringify(this.hiraganaTemp)) && ((_c = hiraganaMaps.get(JSON.stringify(this.hiraganaTemp))) === null || _c === void 0 ? void 0 : _c.length) == 3) {
                    if (hiranagaSentence) {
                        hiranagaSentence.innerHTML = this.colorTypedJapanese() || "";
                        this.kanaIdx++;
                        hiranagaSentence.innerHTML = this.colorTypedJapanese() || "";
                        this.kanaIdx++;
                        hiranagaSentence.innerHTML = this.colorTypedJapanese() || "";
                        this.kanaIdx++;
                        this.hiraganaTemp = "";
                    }
                }
                else if (key == "n" && (this.prevChar == "n" || this.prevChar == "")) {
                    this.prevChar = key;
                    this.hiraganaTemp = "";
                }
                else if (key == "n" &&
                    (nextChar !== "a" &&
                        nextChar !== "i" &&
                        nextChar !== "u" &&
                        nextChar !== "e" &&
                        nextChar !== "o" &&
                        nextChar !== "n")) {
                    if (hiranagaSentence) {
                        hiranagaSentence.innerHTML = this.colorTypedJapanese() || "";
                        this.kanaIdx++;
                        this.hiraganaTemp = "";
                    }
                }
                else if (key == "n" && this.prevChar == "n") {
                    this.hiraganaTemp = "";
                }
                this.prevChar = key;
                this.idx2++;
                this.charCorrect++;
                if (this.idx2 !== this.parsedData[this.idx1][this.pattern[this.idx1]].length) {
                    return true;
                }
                // 正しいキーが押されたときの処理
            }
            else {
                var reg = new RegExp("^" + this.temp);
                for (var i = 0; i < parsedData[this.idx1].length; i++) {
                    if (parsedData[this.idx1][i].match(reg)) {
                        this.pattern[this.idx1] = i;
                        break;
                    }
                }
                if (key == parsedData[this.idx1][this.pattern[this.idx1]][this.idx2]) {
                    this.hiraganaTemp += key;
                    if (sentence) {
                        sentence.innerHTML = this.colorTypedRoma(parsedData, this.pattern, this.idx1, this.idx2) || "";
                    }
                    if (hiraganaMaps.get(JSON.stringify(this.hiraganaTemp)) && ((_d = hiraganaMaps.get(JSON.stringify(this.hiraganaTemp))) === null || _d === void 0 ? void 0 : _d.length) == 2) {
                        if (hiranagaSentence) {
                            hiranagaSentence.innerHTML = this.colorTypedJapanese() || "";
                            this.kanaIdx++;
                            hiranagaSentence.innerHTML = this.colorTypedJapanese() || "";
                            this.kanaIdx++;
                            this.hiraganaTemp = "";
                        }
                    }
                    else if (hiraganaMaps.get(JSON.stringify(this.hiraganaTemp)) && ((_e = hiraganaMaps.get(JSON.stringify(this.hiraganaTemp))) === null || _e === void 0 ? void 0 : _e.length) == 1) {
                        if (hiranagaSentence) {
                            hiranagaSentence.innerHTML = this.colorTypedJapanese() || "";
                            this.kanaIdx++;
                            this.hiraganaTemp = "";
                        }
                    }
                    else if (hiraganaMaps.get(JSON.stringify(this.hiraganaTemp)) && ((_f = hiraganaMaps.get(JSON.stringify(this.hiraganaTemp))) === null || _f === void 0 ? void 0 : _f.length) == 3) {
                        if (hiranagaSentence) {
                            hiranagaSentence.innerHTML = this.colorTypedJapanese() || "";
                            this.kanaIdx++;
                            hiranagaSentence.innerHTML = this.colorTypedJapanese() || "";
                            this.kanaIdx++;
                            hiranagaSentence.innerHTML = this.colorTypedJapanese() || "";
                            this.kanaIdx++;
                            this.hiraganaTemp = "";
                        }
                    }
                    else if (key == "n" && (this.prevChar == "n" || this.prevChar == "")) {
                        this.prevChar = key;
                        this.hiraganaTemp = "";
                    }
                    else if (key == "n" &&
                        (nextChar !== "a" &&
                            nextChar !== "i" &&
                            nextChar !== "u" &&
                            nextChar !== "e" &&
                            nextChar !== "o" &&
                            nextChar !== "n")) {
                        if (hiranagaSentence) {
                            hiranagaSentence.innerHTML = this.colorTypedJapanese() || "";
                            this.kanaIdx++;
                            this.hiraganaTemp = "";
                        }
                    }
                    else if (key == "n" && this.prevChar == "n") {
                        this.hiraganaTemp = "";
                    }
                    this.prevChar = key;
                    this.idx2++;
                    this.charCorrect++;
                    if (this.idx2 !== this.parsedData[this.idx1][this.pattern[this.idx1]].length) {
                        return true;
                    }
                }
                else {
                    this.temp = this.temp.slice(0, -1);
                    this.charMissed++;
                }
            }
            if (this.idx2 == parsedData[this.idx1][this.pattern[this.idx1]].length) {
                if (this.idx1 == parsedData.length - 1) {
                    sentence.innerHTML = "";
                }
                else {
                    this.idx1++;
                    this.idx2 = 0;
                    this.temp = "";
                }
            }
        }
    };
    Parser.prototype.isFinished = function () {
        if (this.idx2 == this.parsedData[this.idx1][this.pattern[this.idx1]].length && this.idx1 == this.parsedData.length - 1) {
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
        }
        else {
            return false;
        }
    };
    Parser.prototype.colorTypedJapanese = function () {
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
    };
    Parser.prototype.colorTypedRoma = function (parsedData, pattern, idx1, idx2) {
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
    };
    Parser.prototype.setData = function (text1, text2) {
        //text1: 本文, text2:ひらがな
        this.text1 = text1;
        this.text2 = text2;
    };
    return Parser;
}());

export default Parser;

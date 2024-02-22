## ローマ字複数入力対応

### 使用方法
以下のコードを追加
```html:index.html
<div class="sentenceJP" id="sentenceJP"></div>
<span class="sentence" id="sentence"></span>
<script src="src/map.js"></script>
<script src="src/parser.js"></script>
```
```js:parser.js
const text1 = ["漢字を含む文章1", "漢字を含む文章2"]；
const text2 = ["ひらがなの文章1", "ひらがなの文章2"];
sentenceJP.textContent = text1[0] //任意の添え字
parser.check(parser.build(text2[0])); //text1の添字と揃える
```
色をつける場合
```css:style.css
.typed {
  color: aqua
}
```
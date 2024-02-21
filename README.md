## ローマ字複数入力対応

### 使用方法
以下のコードを追加
```html:index.html
<span class="sentence" id="sentence"></span>
<script src="src/map.js"></script>
<script src="src/parser.js"></script>
```
```js:parser.js
parser.check(parser.build("ひらがなのもじれつ"));
```
色をつける場合
```css:style.css
.typed {
  color: aqua
}
```
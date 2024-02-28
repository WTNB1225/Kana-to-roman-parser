# ローマ字複数入力対応ライブラリ

# インストール

```sh
npm i hiragana-romazi-parser
```

### 使用方法

以下のようにコードを追加

```tsx:home.tsx
import Parser from "hiragana-romazi-parser";
import { useEffect, useRef } from "react";
.
.
.
export default function Home() {
  const sentenceJPRef = useRef(null);
  const hiraganaRef = useRef(null);
  const sentenceRef = useRef(null);
  let data: string[][];
  useEffect(() => {
    const randomNum = Math.floor(Math.random() * text1.length); //ランダムな数字を生成
    let parser = new Parser();
    //最初は自分で文章をセットする必要がある
    parser.setData(text1, text2);
    if (sentenceJPRef.current) {
      (sentenceJPRef.current as HTMLDivElement).textContent = text1[randomNum]; //漢字の文章をセット
    }
    if (hiraganaRef.current) {
      (hiraganaRef.current as HTMLDivElement).textContent = text2[randomNum]; //ひらがなの文章をセット
    }
    if(sentenceRef.current){
      (sentenceRef.current as HTMLDivElement).textContent = ""; //漢字の文章をセット
      data = parser.build(text2[randomNum]);
    }
    document.onkeydown = (e) => {
      parser.check(data, e.key); //ひらがなの文章をセット
      if(parser.isFinished()){ 
        const randomNum = Math.floor(Math.random() * text1.length); //ランダムな数字を生成
        data = parser.build(text2[randomNum]);
        if(sentenceJPRef.current){
          (sentenceJPRef.current as HTMLDivElement).textContent = text1[randomNum];//漢字の文章をセット
        }
        if(hiraganaRef.current){
          (hiraganaRef.current as HTMLDivElement).textContent = text2[randomNum]; //ひらがなの文章をセット
      }
    }
  } 
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);
  return(
    <>
      <div className="sentenceJP" id="sentenceJP" ref={sentenceJPRef}></div>
      <div className="hiragana" id="hiragana" ref={hiraganaRef}></div>
      <span className="sentence" id="sentence" ref={sentenceRef}></span>
    </>
  )
}
```

色をつける場合

```css:style.css
.typed {
  color: aqua
}
```

const text1 = [
  "今日は晴れています",
  "私は日本料理が好きです",
  "旅行に行きたいです",
  "美味しいコーヒーが飲みたいです",
  "新しい言語を学ぶのは楽しいです",
  "友達と一緒に映画を見に行きました",
  "毎日の運動は健康に良いです",
  "日本の文化に興味があります",
  "家族と一緒に過ごす時間は幸せです",
  "音楽は心を癒します",
  "おいしい料理を作るのが好きです",
  "自然の中を散歩するのはリラックスできます",
  "努力すれば夢は叶います",
  "新しい本を読むのが楽しみです",
  "人生は挑戦の連続です",
  "日本の花火は美しいです",
  "時間は貴重な資源です",
  "友達と一緒に旅行に行くのは楽しいです",
  "笑顔は心を温かくします",
  "外国の文化を学ぶのは面白いです",
  "毎日の積み重ねが成果を生みます",
  "日本の四季は素晴らしいです",
  "新しい技術に挑戦するのは刺激的です",
  "健康な食事を摂ることは大切です",
  "学ぶことは人生の財産です",
  "家族との食事は楽しいひとときです",
  "綺麗な景色を見ると心が落ち着きます",
  "困難を乗り越えることで成長できます",
  "音楽は人々を結びつけます",
  "一日の疲れを癒すのは良い睡眠です",
  "ポジティブな考え方が幸せを引き寄せます",
  "お気に入りの本を読むのはリラックスできます",
  "人生は一度きりですから、充実した毎日を送りたいです",
  "美しい自然に感謝します",
  "目標に向かって努力しましょう",
  "おいしいパンの香りはたまりません",
  "散歩することで心が落ち着きます",
  "可能性は無限大です",
  "今日という一日は新たな始まりです",
  "心優しい人に出会えると幸せです",
  "波の音を聞くと癒されます",
  "音楽は心を豊かにします",
  "雨が心を洗い流します",
  "幸せは心の中にあります",
  "新しいスキルを学ぶことで自己成長できます",
  "世界は多様で興味深い人々で溢れています",
  "星が夜空できらめいています",
  "ポジティブな思考が成功につながります",
  "香ばしいコーヒーの香りは元気を与えてくれます",
  "一期一会の人生を大切にしましょう",
  "彼女は素敵な笑顔を持っています",
  "大切な人と過ごす時間を楽しんでいます",
  "紅葉は目を楽しませてくれます",
  "大きな夢を持ち、諦めずに頑張りましょう",
  "風が木々をささやきます",
  "人生がくれた機会に感謝します",
  "子供たちの笑い声は伝染します",
  "自然の美しさにインスピレーションを受けます",
  "世界は興味深い人々で溢れています",
  "自分自身のベストバージョンを目指します",
  "最初の一歩はいつも一番難しいです",
  "夕日を眺めるのが好きです",
  "海の香りは爽やかです",
  "親切にすることは何もコストはかかりません",
  "パズルを解くのが好きです",
  "旅の目的地としてだけでなく、旅の途中を楽しんでください",
  "愛の力を信じています",
  "鳥の鳴き声は春の訪れを告げます",
  "私は常に学び続け、成長しています",
  "芝刈りの匂いは元気を与えてくれます",
  "人生は美しい贈り物です",
  "彼女は絵を描く才能があります",
  "静寂の中に安らぎを見つけます",
  "赤ちゃんの笑い声は心温まるものです",
  "人々の本質的な善良さを信じています",
  "蒸し暑い日に降る雨の香りはさわやかです",
  "成功は努力と決断の結果です",
  "夜空の星を眺めるのは楽しいです",
  "掴むべき機会がたくさんあります",
  "素晴らしい友達と家族に恵まれています",
  "岩場に打ちつける波の音は力強いです",
  "人々を助けることに喜びを見出します",
  "幸せの鍵は感謝です",
  "宇宙の驚異に常に驚かされます",
  "焼きたてのクッキーの香りは楽しいです",
  "人生は短いので無駄にしないようにしましょう",
  "彼女は言葉遣いが上手です",
  "美しい風景を写真に撮るのが好きです",
  "滝の音は心を癒します",
  "夢には現実になる力があります",
  "世界は本であり、旅しない人はただのページを読むだけです",
  "自己ケアの重要性を信じています",
  "キャンプファイヤーの香りは思い出深いです",
  "幸福は内側にあります",
  "芸術の美しさに心が安らぎます",
  "拍手の音は最高です",
  "現在の瞬間に感謝します",
  "成長のための可能性は無限です",
  "愛はすべてを克服します",
  "新しいことを試すのが好きです",
  "世界はより多くの思いやりと理解を必要としています",
  "キャンプファイヤー"
];
const text2 = [
  "きょうははれています",
  "わたしはにほんりょうりがすきです",
  "りょこうにいきたいです",
  "おいしいこーひーがのみたいです",
  "あたらしいげんごをまなぶのはたのしいです",
  "ともだちといっしょにえいがをみにいきました",
  "まいにちのうんどうはけんこうによいです",
  "にほんのぶんかにきょうみがあります",
  "かぞくといっしょにすごすじかんはしあわせです",
  "おんがくはこころをいやします",
  "おいしいりょうりをつくるのがすきです",
  "しぜんのなかをさんぽするのはりらっくすできます",
  "どりょくすればゆめはかないます",
  "あたらしいほんをよむのがたのしみです",
  "じんせいはちょうせんのれんぞくです",
  "にほんのはなびはうつくしいです",
  "じかんはきちょうなしげんです",
  "ともだちといっしょにりょこうにいくのはたのしいです",
  "えがおはこころをあたたかくします",
  "がいこくのぶんかをまなぶのはおもしろいです",
  "まいにちのつみかさねがせいかをうみます",
  "にほんのしきはすばらしいです",
  "あたらしいきょうりょくにちょうせんするのはしげきてきです",
  "けんこうなしょくじをとることはたいせつです",
  "まなぶことはじんせいのざいさんです",
  "かぞくとのしょくじはたのしいひとときです",
  "きれいなけしきをみるとこころがおちつきます",
  "こんなんをのりこえることでせいちょうできます",
  "おんがくはひとびとをむすびつけます",
  "いちにちのつかれをいやすのはよいすいみんです",
  "ぽじてぃぶなかんがえかたがしあわせをひきよせます",
  "おきにいりのほんをよむのはりらっくすできます",
  "じんせいはいちどきりですから、じゅうじつしたまいにちをおくりたいです",
  "うつくしいしぜんにかんしゃします",
  "もくひょうにむかってどりょくしましょう",
  "おいしいぱんのかおりはたまりません",
  "さんぽすることでこころがおちつきます",
  "かのうせいはむげんだいです",
  "きょうといういちにちはあらたなはじまりです",
  "こころやさしいひとにであえるとしあわせです",
  "なみのおとをきくといやされます",
  "おんがくはこころをゆたかにします",
  "あめがこころをあらいながします",
  "しあわせはこころのなかにあります",
  "あたらしいすきるをまなぶことでじこせいちょうできます",
  "せかいはたようできょうみぶかいひとびとであふれています",
  "ほしはよぞらできらめいています",
  "ぽじてぃぶなしこうがせいこうにつながります",
  "かおばしいこーひーのかおりはげんきをあたえてくれます",
  "いちごいちえのじんせいをたいせつにしましょう",
  "かのじょはすてきなえがおをもっています",
  "たいせつなひととすごすじかんをたのしんでいます",
  "こうようはめをたのしませてくれます",
  "おおきなゆめをもち、あきらめずにがんばりましょう",
  "かぜがきぎをささやきます",
  "じんせいがくれたきかいにかんしゃします",
  "こどもたちのわらいごえはでんせんします",
  "しぜんのうつくしさにいんすぴれーしょんをうけます",
  "せかいはきょうみぶかいひとびとであふれています",
  "じぶんじしんのべすとばーじょんをめざします",
  "さいしょのいっぽはいつもいちばんむずかしいです",
  "ゆうひをながめるのがすきです",
  "うみのかおりはさわやかです",
  "しんせつにすることはなにもこすとはかりません",
  "ぱずるをとくのがすきです",
  "たびのもくてきちとしてだけでなく、たびのとちゅうをたのしんでください",
  "あいのちからをしんじています",
  "とりのなきごえははるのおとずれをつげます",
  "わたしはつねにまなびつづけ、せいちょうしています",
  "しばかりのにおいはげんきをあたえてくれます",
  "じんせいはうつくしいギフトです",
  "かのじょはえをかくさいのうがあります",
  "せいじゃくのなかにやすらぎをみつけます",
  "あかちゃんのわらいごえはこころあたたまるものです",
  "ひとびとのほんしつてきなぜんりょうさをしんじています",
  "むしあついひにふるあめのかおりはさわやかです",
  "せいこうはどりょくとけつだんのけっかです",
  "よぞらがほしをながめるのはたのしいです",
  "つかむべききかいがたくさんあります",
  "すばらしいともだちとかぞくにめぐまれています",
  "いわばにうちつけるなみのおとはちからづよいです",
  "ひとびとをたすけることによろこびをみいだします",
  "しあわせのかぎはかんしゃです",
  "うちゅうのきょういにつねにおどろかれます",
  "やきたてのくっきーのかおりはたのしいです",
  "じんせいはみじかいのでむだにしないようにしましょう",
  "かのじょはことばづかいがじょうずです",
  "うつくしいふうけいをしゃしんにとるのがすきです",
  "たきのおとはこころをいやします",
  "ゆめにはげんじつになるちからがあります",
  "せかいはほんであり、たびしないひとはただのぺーじをよむだけです",
  "じこけあのじゅうようせいをしんじています",
  "きゃんぷふぁいやーのかおりはおもいでぶかいです",
  "こうふくはうちがわにあります",
  "げいじゅつのうつくしさにこころがやすらぎます",
  "はくしゅのおとはさいこうです",
  "げんざいのしゅんかんにかんしゃします",
  "せいちょうのためのかのうせいはむげんです",
  "あいはすべてをこくふくします",
  "あたらしいことをためすのがすきです",
  "せかいはよりおおくのおもいやりとりかいをひつようとしています",
  "きゃんぷふぁいやー",
];

const sentenceJP = document.getElementById("sentenceJP");
const hiragana = document.getElementById("hiragana");
//文章をセット
parser.setData(text1, text2);
//最初は自分で文章をセットする必要がある
sentenceJP.textContent = text1[text1.length - 1]; //漢字の文章をセット
hiragana.textContent = text2[text1.length - 1]; //ひらがなの文章をセット
parser.check(parser.build(text2[text1.length - 1])); //ひらがなの文章をセット

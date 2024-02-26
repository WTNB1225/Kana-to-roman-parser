const hiraganaMap = [
  // 三文字コード
  { char: "っうぁ", keys: ["wwha"] },
  { char: "っうぃ", keys: ["wwhi"] },
  { char: "っうぇ", keys: ["wwhe"] },
  { char: "っうぉ", keys: ["wwho"] },
  { char: "っヴぁ", keys: ["vva"] },
  { char: "っヴぃ", keys: ["vvi", "vvyi"] },
  { char: "っヴぇ", keys: ["vve", "vvye"] },
  { char: "っヴぉ", keys: ["vvo"] },
  { char: "っヴゃ", keys: ["vvya"] },
  { char: "っヴゅ", keys: ["vvyu"] },
  { char: "っヴょ", keys: ["vvyo"] },
  { char: "っきゃ", keys: ["kkya"] },
  { char: "っきぃ", keys: ["kkyi"] },
  { char: "っきゅ", keys: ["kkyu"] },
  { char: "っきぇ", keys: ["kkye"] },
  { char: "っきょ", keys: ["kkyo"] },
  { char: "っぎゃ", keys: ["ggya"] },
  { char: "っぎぃ", keys: ["ggyi"] },
  { char: "っぎゅ", keys: ["ggyu"] },
  { char: "っぎぇ", keys: ["ggye"] },
  { char: "っぎょ", keys: ["ggyo"] },
  { char: "っくぁ", keys: ["qqa", "qqwa"] },
  { char: "っくぃ", keys: ["qqi", "qqwi", "qqyi"] },
  { char: "っくぅ", keys: ["qqwu"] },
  { char: "っくぇ", keys: ["qqe", "qqwe", "qqye"] },
  { char: "っくぉ", keys: ["qqo", "qqwo"] },
  { char: "っくゃ", keys: ["qqya"] },
  { char: "っくゅ", keys: ["qqyu"] },
  { char: "っくょ", keys: ["qqyo"] },
  { char: "っぐぁ", keys: ["ggwa"] },
  { char: "っぐぃ", keys: ["ggwi"] },
  { char: "っぐぅ", keys: ["ggwu"] },
  { char: "っぐぇ", keys: ["ggwe"] },
  { char: "っぐぉ", keys: ["ggwo"] },
  { char: "っしゃ", keys: ["ssya", "ssha"] },
  { char: "っしぃ", keys: ["ssyi"] },
  { char: "っしゅ", keys: ["ssyu", "sshu"] },
  { char: "っしぇ", keys: ["ssye", "sshe"] },
  { char: "っしょ", keys: ["ssyo", "ssho"] },
  { char: "っじゃ", keys: ["jja", "jjya", "zzya"] },
  { char: "っじぃ", keys: ["jjyi", "zzyi"] },
  { char: "っじゅ", keys: ["jju", "jjyu", "zzyu"] },
  { char: "っじぇ", keys: ["jje", "jjye", "zzye"] },
  { char: "っじょ", keys: ["jjo", "jjyo", "zzyo"] },
  { char: "っすぁ", keys: ["sswa"] },
  { char: "っすぃ", keys: ["sswi"] },
  { char: "っすぅ", keys: ["sswu"] },
  { char: "っすぇ", keys: ["sswe"] },
  { char: "っすぉ", keys: ["sswo"] },
  { char: "っちゃ", keys: ["ttya", "ccha"] },
  { char: "っちぃ", keys: ["ttyi"] },
  { char: "っちゅ", keys: ["ttyu", "cchu", "ccyu"] },
  { char: "っちぇ", keys: ["ttye", "cche", "ccye"] },
  { char: "っちょ", keys: ["ttyo", "ccho", "ccyo"] },
  { char: "っぢゃ", keys: ["ddya"] },
  { char: "っぢぃ", keys: ["ddyi"] },
  { char: "っぢゅ", keys: ["ddyu"] },
  { char: "っぢぇ", keys: ["ddye"] },
  { char: "っぢょ", keys: ["ddyo"] },
  { char: "っつぁ", keys: ["ttsa"] },
  { char: "っつぃ", keys: ["ttsi"] },
  { char: "っつぇ", keys: ["ttse"] },
  { char: "っつぉ", keys: ["ttso"] },
  { char: "ってゃ", keys: ["ttha"] },
  { char: "ってぃ", keys: ["tthi"] },
  { char: "ってゅ", keys: ["tthu"] },
  { char: "ってぇ", keys: ["tthe"] },
  { char: "ってょ", keys: ["ttho"] },
  { char: "っでゃ", keys: ["ddha"] },
  { char: "っでぃ", keys: ["ddhi"] },
  { char: "っでゅ", keys: ["ddhu"] },
  { char: "っでぇ", keys: ["ddhe"] },
  { char: "っでょ", keys: ["ddho"] },
  { char: "っとぁ", keys: ["ttwa"] },
  { char: "っとぃ", keys: ["ttwi"] },
  { char: "っとぅ", keys: ["ttwu"] },
  { char: "っとぇ", keys: ["ttwe"] },
  { char: "っとぉ", keys: ["ttwo"] },
  { char: "っどぁ", keys: ["ddwa"] },
  { char: "っどぃ", keys: ["ddwi"] },
  { char: "っどぅ", keys: ["ddwu"] },
  { char: "っどぇ", keys: ["ddwe"] },
  { char: "っどぉ", keys: ["ddwo"] },
  { char: "っひゃ", keys: ["hhya"] },
  { char: "っひぃ", keys: ["hhyi"] },
  { char: "っひゅ", keys: ["hhyu"] },
  { char: "っひぇ", keys: ["hhye"] },
  { char: "っひょ", keys: ["hhyo"] },
  { char: "っびゃ", keys: ["bbya"] },
  { char: "っびぃ", keys: ["bbyi"] },
  { char: "っびゅ", keys: ["bbyu"] },
  { char: "っびぇ", keys: ["bbye"] },
  { char: "っびょ", keys: ["bbyo"] },
  { char: "っぴゃ", keys: ["ppya"] },
  { char: "っぴぃ", keys: ["ppyi"] },
  { char: "っぴゅ", keys: ["ppyu"] },
  { char: "っぴぇ", keys: ["ppye"] },
  { char: "っぴょ", keys: ["ppyo"] },
  { char: "っふぁ", keys: ["ffa", "ffwa"] },
  { char: "っふぃ", keys: ["ffi", "ffwi", "ffyi"] },
  { char: "っふぅ", keys: ["ffwu"] },
  { char: "っふぇ", keys: ["ffe", "ffwe", "ffye"] },
  { char: "っふぉ", keys: ["ffo", "ffwo"] },
  { char: "っふゃ", keys: ["ffya"] },
  { char: "っふゅ", keys: ["ffyu"] },
  { char: "っふょ", keys: ["ffyo"] },
  { char: "っみゃ", keys: ["mmya"] },
  { char: "っみぃ", keys: ["mmyi"] },
  { char: "っみゅ", keys: ["mmyu"] },
  { char: "っみぇ", keys: ["mmye"] },
  { char: "っみょ", keys: ["mmyo"] },
  { char: "っりゃ", keys: ["rrya"] },
  { char: "っりぃ", keys: ["rryi"] },
  { char: "っりゅ", keys: ["rryu"] },
  { char: "っりぇ", keys: ["rrye"] },
  { char: "っりょ", keys: ["rryo"] },

  // 二文字コード
  { char: "いぇ", keys: ["ye"] },
  { char: "うぁ", keys: ["wha"] },
  { char: "うぃ", keys: ["whi"] },
  { char: "うぇ", keys: ["whe"] },
  { char: "うぉ", keys: ["who"] },
  { char: "ヴぁ", keys: ["va"] },
  { char: "ヴぃ", keys: ["vi", "vyi"] },
  { char: "ヴぇ", keys: ["ve", "vye"] },
  { char: "ヴぉ", keys: ["vo"] },
  { char: "ヴゃ", keys: ["vya"] },
  { char: "ヴゅ", keys: ["vyu"] },
  { char: "ヴょ", keys: ["vyo"] },
  { char: "きゃ", keys: ["kya"] },
  { char: "きぃ", keys: ["kyi"] },
  { char: "きゅ", keys: ["kyu"] },
  { char: "きぇ", keys: ["kye"] },
  { char: "きょ", keys: ["kyo"] },
  { char: "ぎゃ", keys: ["gya"] },
  { char: "ぎぃ", keys: ["gyi"] },
  { char: "ぎゅ", keys: ["gyu"] },
  { char: "ぎぇ", keys: ["gye"] },
  { char: "ぎょ", keys: ["gyo"] },
  { char: "くぁ", keys: ["qa", "qwa"] },
  { char: "くぃ", keys: ["qi", "qwi", "qyi"] },
  { char: "くぅ", keys: ["qwu"] },
  { char: "くぇ", keys: ["qe", "qwe", "qye"] },
  { char: "くぉ", keys: ["qo", "qwo"] },
  { char: "くゃ", keys: ["qya"] },
  { char: "くゅ", keys: ["qyu"] },
  { char: "くょ", keys: ["qyo"] },
  { char: "ぐぁ", keys: ["gwa"] },
  { char: "ぐぃ", keys: ["gwi"] },
  { char: "ぐぅ", keys: ["gwu"] },
  { char: "ぐぇ", keys: ["gwe"] },
  { char: "ぐぉ", keys: ["gwo"] },
  { char: "しゃ", keys: ["sya", "sha"] },
  { char: "しぃ", keys: ["syi"] },
  { char: "しゅ", keys: ["syu", "shu"] },
  { char: "しぇ", keys: ["sye", "she"] },
  { char: "しょ", keys: ["syo", "sho"] },
  { char: "じゃ", keys: ["ja", "jya", "zya"] },
  { char: "じぃ", keys: ["jyi", "zyi"] },
  { char: "じゅ", keys: ["ju", "jyu", "zyu"] },
  { char: "じぇ", keys: ["je", "jye", "zye"] },
  { char: "じょ", keys: ["jo", "jyo", "zyo"] },
  { char: "すぁ", keys: ["swa"] },
  { char: "すぃ", keys: ["swi"] },
  { char: "すぅ", keys: ["swu"] },
  { char: "すぇ", keys: ["swe"] },
  { char: "すぉ", keys: ["swo"] },
  { char: "ちゃ", keys: ["tya", "cha"] },
  { char: "ちぃ", keys: ["tyi"] },
  { char: "ちゅ", keys: ["tyu", "chu", "cyu"] },
  { char: "ちぇ", keys: ["tye", "che", "cye"] },
  { char: "ちょ", keys: ["tyo", "cho", "cyo"] },
  { char: "ぢゃ", keys: ["dya"] },
  { char: "ぢぃ", keys: ["dyi"] },
  { char: "ぢゅ", keys: ["dyu"] },
  { char: "ぢぇ", keys: ["dye"] },
  { char: "ぢょ", keys: ["dyo"] },
  { char: "つぁ", keys: ["tsa"] },
  { char: "つぃ", keys: ["tsi"] },
  { char: "つぇ", keys: ["tse"] },
  { char: "つぉ", keys: ["tso"] },
  { char: "てゃ", keys: ["tha"] },
  { char: "てぃ", keys: ["thi"] },
  { char: "てゅ", keys: ["thu"] },
  { char: "てぇ", keys: ["the"] },
  { char: "てょ", keys: ["tho"] },
  { char: "でゃ", keys: ["dha"] },
  { char: "でぃ", keys: ["dhi"] },
  { char: "でゅ", keys: ["dhu"] },
  { char: "でぇ", keys: ["dhe"] },
  { char: "でょ", keys: ["dho"] },
  { char: "とぁ", keys: ["twa"] },
  { char: "とぃ", keys: ["twi"] },
  { char: "とぅ", keys: ["twu"] },
  { char: "とぇ", keys: ["twe"] },
  { char: "とぉ", keys: ["two"] },
  { char: "どぁ", keys: ["dwa"] },
  { char: "どぃ", keys: ["dwi"] },
  { char: "どぅ", keys: ["dwu"] },
  { char: "どぇ", keys: ["dwe"] },
  { char: "どぉ", keys: ["dwo"] },
  { char: "にゃ", keys: ["nya"] },
  { char: "にぃ", keys: ["nyi"] },
  { char: "にゅ", keys: ["nyu"] },
  { char: "にぇ", keys: ["nye"] },
  { char: "にょ", keys: ["nyo"] },
  { char: "ひゃ", keys: ["hya"] },
  { char: "ひぃ", keys: ["hyi"] },
  { char: "ひゅ", keys: ["hyu"] },
  { char: "ひぇ", keys: ["hye"] },
  { char: "ひょ", keys: ["hyo"] },
  { char: "びゃ", keys: ["bya"] },
  { char: "びぃ", keys: ["byi"] },
  { char: "びゅ", keys: ["byu"] },
  { char: "びぇ", keys: ["bye"] },
  { char: "びょ", keys: ["byo"] },
  { char: "ぴゃ", keys: ["pya"] },
  { char: "ぴぃ", keys: ["pyi"] },
  { char: "ぴゅ", keys: ["pyu"] },
  { char: "ぴぇ", keys: ["pye"] },
  { char: "ぴょ", keys: ["pyo"] },
  { char: "ふぁ", keys: ["fa", "fwa"] },
  { char: "ふぃ", keys: ["fi", "fwi", "fyi"] },
  { char: "ふぅ", keys: ["fwu"] },
  { char: "ふぇ", keys: ["fe", "fwe", "fye"] },
  { char: "ふぉ", keys: ["fo", "fwo"] },
  { char: "ふゃ", keys: ["fya"] },
  { char: "ふゅ", keys: ["fyu"] },
  { char: "ふょ", keys: ["fyo"] },
  { char: "みゃ", keys: ["mya"] },
  { char: "みぃ", keys: ["myi"] },
  { char: "みゅ", keys: ["myu"] },
  { char: "みぇ", keys: ["mye"] },
  { char: "みょ", keys: ["myo"] },
  { char: "りゃ", keys: ["rya"] },
  { char: "りぃ", keys: ["ryi"] },
  { char: "りゅ", keys: ["ryu"] },
  { char: "りぇ", keys: ["rye"] },
  { char: "りょ", keys: ["ryo"] },
  { char: "っか", keys: ["kka"] },
  { char: "っき", keys: ["kki"] },
  { char: "っく", keys: ["kku", "qqu"] },
  { char: "っけ", keys: ["kke"] },
  { char: "っこ", keys: ["kko"] },
  { char: "っが", keys: ["gga"] },
  { char: "っぎ", keys: ["ggi"] },
  { char: "っぐ", keys: ["ggu"] },
  { char: "っげ", keys: ["gge"] },
  { char: "っご", keys: ["ggo"] },
  { char: "っさ", keys: ["ssa"] },
  { char: "っし", keys: ["ssi", "sshi", "cci"] },
  { char: "っす", keys: ["ssu"] },
  { char: "っせ", keys: ["sse"] },
  { char: "っそ", keys: ["sso"] },
  { char: "っざ", keys: ["zza"] },
  { char: "っじ", keys: ["jji", "zzi"] },
  { char: "っず", keys: ["zzu"] },
  { char: "っぜ", keys: ["zze"] },
  { char: "っぞ", keys: ["zzo"] },
  { char: "った", keys: ["tta"] },
  { char: "っち", keys: ["tti", "cchi"] },
  { char: "っつ", keys: ["ttu", "ttsu"] },
  { char: "って", keys: ["tte"] },
  { char: "っと", keys: ["tto"] },
  { char: "っだ", keys: ["dda"] },
  { char: "っぢ", keys: ["ddi"] },
  { char: "っづ", keys: ["ddu"] },
  { char: "っで", keys: ["dde"] },
  { char: "っど", keys: ["ddo"] },
  { char: "っは", keys: ["hha"] },
  { char: "っひ", keys: ["hhi"] },
  { char: "っふ", keys: ["ffu", "hhu"] },
  { char: "っへ", keys: ["hhe"] },
  { char: "っぱ", keys: ["ppa"] },
  { char: "っぴ", keys: ["ppi"] },
  { char: "っぷ", keys: ["ppu"] },
  { char: "っぺ", keys: ["ppe"] },
  { char: "っぽ", keys: ["ppo"] },
  { char: "っば", keys: ["pba"] },
  { char: "っび", keys: ["pbi"] },
  { char: "っぶ", keys: ["pbu"] },
  { char: "っべ", keys: ["pbe"] },
  { char: "っぼ", keys: ["pbo"] },
  { char: "っほ", keys: ["hho"] },
  { char: "っま", keys: ["mma"] },
  { char: "っみ", keys: ["mmi"] },
  { char: "っむ", keys: ["mmu"] },
  { char: "っめ", keys: ["mme"] },
  { char: "っも", keys: ["mmo"] },
  { char: "っや", keys: ["yya"] },
  { char: "っゆ", keys: ["yyu"] },
  { char: "っよ", keys: ["yyo"] },
  { char: "っら", keys: ["rra"] },
  { char: "っり", keys: ["rri"] },
  { char: "っる", keys: ["rru"] },
  { char: "っれ", keys: ["rre"] },
  { char: "っろ", keys: ["rro"] },
  { char: "っわ", keys: ["wwa"] },
  { char: "っを", keys: ["wwo"] },

  // 一文字コード
  { char: "あ", keys: ["a"] },
  { char: "い", keys: ["i", "yi"] },
  { char: "う", keys: ["u", "whu", "wu"] },
  { char: "え", keys: ["e"] },
  { char: "お", keys: ["o"] },
  { char: "か", keys: ["ka", "ca"] },
  { char: "き", keys: ["ki"] },
  { char: "く", keys: ["ku", "cu", "qu"] },
  { char: "け", keys: ["ke"] },
  { char: "こ", keys: ["ko"] },
  { char: "さ", keys: ["sa"] },
  { char: "し", keys: ["si", "shi", "ci"] },
  { char: "す", keys: ["su"] },
  { char: "せ", keys: ["se", "ce"] },
  { char: "そ", keys: ["so"] },
  { char: "た", keys: ["ta"] },
  { char: "ち", keys: ["chi", "ti"] },
  { char: "つ", keys: ["tu", "tsu"] },
  { char: "て", keys: ["te"] },
  { char: "と", keys: ["to"] },
  { char: "な", keys: ["na"] },
  { char: "に", keys: ["ni"] },
  { char: "ぬ", keys: ["nu"] },
  { char: "ね", keys: ["ne"] },
  { char: "の", keys: ["no"] },
  { char: "は", keys: ["ha"] },
  { char: "ひ", keys: ["hi"] },
  { char: "ふ", keys: ["fu", "hu"] },
  { char: "へ", keys: ["he"] },
  { char: "ほ", keys: ["ho"] },
  { char: "ま", keys: ["ma"] },
  { char: "み", keys: ["mi"] },
  { char: "む", keys: ["mu"] },
  { char: "め", keys: ["me"] },
  { char: "も", keys: ["mo"] },
  { char: "や", keys: ["ya"] },
  { char: "ゆ", keys: ["yu"] },
  { char: "よ", keys: ["yo"] },
  { char: "ら", keys: ["ra"] },
  { char: "り", keys: ["ri"] },
  { char: "る", keys: ["ru"] },
  { char: "れ", keys: ["re"] },
  { char: "ろ", keys: ["ro"] },
  { char: "わ", keys: ["wa"] },
  { char: "を", keys: ["wo"] },
  { char: "ん", keys: ["nn", "xn"] },
  { char: "ぁ", keys: ["la", "xa"] },
  { char: "ぃ", keys: ["li", "xi"] },
  { char: "ぅ", keys: ["lu", "xu"] },
  { char: "ぇ", keys: ["le", "xe"] },
  { char: "ぉ", keys: ["lo", "xo"] },
  { char: "ゃ", keys: ["lya", "xya"] },
  { char: "ゅ", keys: ["lyu", "xyu"] },
  { char: "ょ", keys: ["lyo", "xyo"] },
  { char: "ヵ", keys: ["lka", "xka"] },
  { char: "ヶ", keys: ["lke", "xke"] },
  { char: "っ", keys: ["ltu", "ltsu", "xtu", "xtsu"] },
  { char: "ゎ", keys: ["lwa", "xwa"] },
  { char: "が", keys: ["ga"] },
  { char: "ぎ", keys: ["gi"] },
  { char: "ぐ", keys: ["gu"] },
  { char: "げ", keys: ["ge"] },
  { char: "ご", keys: ["go"] },
  { char: "ざ", keys: ["za"] },
  { char: "じ", keys: ["ji", "zi"] },
  { char: "ず", keys: ["zu"] },
  { char: "ぜ", keys: ["ze"] },
  { char: "ぞ", keys: ["zo"] },
  { char: "だ", keys: ["da"] },
  { char: "ぢ", keys: ["di"] },
  { char: "づ", keys: ["du"] },
  { char: "で", keys: ["de"] },
  { char: "ど", keys: ["do"] },
  { char: "ば", keys: ["ba"] },
  { char: "び", keys: ["bi"] },
  { char: "ぶ", keys: ["bu"] },
  { char: "べ", keys: ["be"] },
  { char: "ぼ", keys: ["bo"] },
  { char: "ぱ", keys: ["pa"] },
  { char: "ぴ", keys: ["pi"] },
  { char: "ぷ", keys: ["pu"] },
  { char: "ぺ", keys: ["pe"] },
  { char: "ぽ", keys: ["po"] },
  { char: "ヴ", keys: ["vu"] },
  { char: "0", keys: ["0"] },
  { char: "1", keys: ["1"] },
  { char: "2", keys: ["2"] },
  { char: "3", keys: ["3"] },
  { char: "4", keys: ["4"] },
  { char: "5", keys: ["5"] },
  { char: "6", keys: ["6"] },
  { char: "7", keys: ["7"] },
  { char: "8", keys: ["8"] },
  { char: "9", keys: ["9"] },
  { char: "ー", keys: ["-"] },
  { char: "～", keys: ["-"] },
  { char: "、", keys: [","] },
  { char: "。", keys: ["."] },
  { char: "#", keys: ["#"] },
  { char: ";", keys: [";"] },
  { char: ":", keys: [":"] },
  { char: "(", keys: ["("] },
  { char: ")", keys: [")"] },
  { char: '"', keys: ['"'] },
  { char: "\\", keys: ["\\"] },
  { char: "\n", keys: ["\n"] },
  { char: "\t", keys: ["\t"] },
  { char: "\r", keys: ["\r"] },
  { char: "<", keys: ["<"] },
  { char: ">", keys: [">"] },
  { char: ",", keys: [","] },
  { char: ".", keys: ["."] },
  { char: "{", keys: ["{"] },
  { char: "}", keys: ["}"] },
  { char: "[", keys: ["["] },
  { char: "]", keys: ["]"] },
  { char: " ", keys: [" "] },
  { char: "=", keys: ["="] },
  { char: "%", keys: ["%"] },
  { char: "+", keys: ["+"] },
  { char: "-", keys: ["-"] },
  { char: "*", keys: ["*"] },
  { char: "/", keys: ["/"] },
  { char: "_", keys: ["_"] },
  { char: "^", keys: ["^"] },
  { char: "~", keys: ["~"] },
  { char: "!", keys: ["!"] },
  { char: "&", keys: ["&"] },
  { char: "'", keys: ["'"] },
  { char: "|", keys: ["|"] },
  { char: "@", keys: ["@"] },
  { char: "`", keys: ["`"] },
  { char: "?", keys: ["?"] },
];
const hiranagaMaps = () => {
  const hiraganaMappingData = new Map();
  hiraganaMap.forEach((value) => {
    if (value.keys.length > 1) {
      for (let key of value.keys) {
        hiraganaMappingData.set(JSON.stringify([key]), value.char);
      }
    } else {
      hiraganaMappingData.set(JSON.stringify(value.keys), value.char);
    }
  });
  console.log(hiraganaMappingData);
  return hiraganaMappingData;
};

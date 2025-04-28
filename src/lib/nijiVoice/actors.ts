const ACTORS = [
  {
    name: "水戸 明日菜",
    gender: "FEMALE",
    voiceStyles: ["素直", "さわやか", "軽快"],
  },
  {
    name: "漆夜 蓮",
    gender: "MALE",
    voiceStyles: ["個性的", "魅力的", "ヤンデレ", "ミステリアス"],
  },
  {
    name: "冬月 初音",
    gender: "FEMALE",
    voiceStyles: ["ロリ", "かわいい", "お茶目", "マイペース"],
  },
  {
    name: "陽斗・エイデン・グリーンウッド",
    gender: "MALE",
    voiceStyles: ["素直", "活発", "陽気", "少年"],
  },
  {
    name: "苔村 まりも",
    gender: "FEMALE",
    voiceStyles: ["マイペース", "個性的", "落ち着いた"],
  },
  {
    name: "野本 藍一郎",
    gender: "MALE",
    voiceStyles: ["大人しい", "澄んだ", "内向的", "素朴"],
  },
  {
    name: "ぽの",
    gender: "FEMALE",
    voiceStyles: ["お茶目", "幼い", "陽気", "猫系"],
  },
  {
    name: "ラピス",
    gender: "FEMALE",
    voiceStyles: ["ASMR", "甘え", "かわいい"],
  },
  {
    name: "朝霧 瑞樹",
    gender: "MALE",
    voiceStyles: ["かっこいい", "落ち着いた", "優しい", "成熟"],
  },
  {
    name: "三浦 隼人",
    gender: "MALE",
    voiceStyles: ["落ち着いた", "頼りになる", "さわやか", "先輩"],
  },
  {
    name: "遠野 澄花",
    gender: "FEMALE",
    voiceStyles: ["内向的", "澄んだ", "優しい", "大人しい"],
  },
  {
    name: "セドリック・E・ウィットモア",
    gender: "MALE",
    voiceStyles: ["自信満々", "少年", "クール", "ツンデレ"],
  },
  {
    name: "若草 ひかり",
    gender: "FEMALE",
    voiceStyles: ["幼い", "かわいい", "素直"],
  },
  {
    name: "羽依",
    gender: "FEMALE",
    voiceStyles: ["内向的", "澄んだ", "おどおどする", "大人しい"],
  },
  {
    name: "キア",
    gender: "MALE",
    voiceStyles: ["軽快", "陽気", "猫系", "飄々とした"],
  },
  {
    name: "高槻 リコ",
    gender: "FEMALE",
    voiceStyles: ["軽快", "活発", "陽気", "お茶目"],
  },
  {
    name: "深海 結涼",
    gender: "FEMALE",
    voiceStyles: ["真面目", "知的", "クール", "ツンデレ"],
  },
  {
    name: "タルト",
    gender: "MALE",
    voiceStyles: ["幼い", "活発", "少年", "猫系"],
  },
  {
    name: "神崎 怜司",
    gender: "MALE",
    voiceStyles: ["落ち着いた", "自信満々", "クール", "低音"],
  },
  {
    name: "月城 美蘭",
    gender: "FEMALE",
    voiceStyles: ["内向的", "ロリ", "落ち着いた"],
  },
  {
    name: "久世 凛",
    gender: "MALE",
    voiceStyles: ["魅力的", "知的", "ヤンデレ", "ミステリアス"],
  },
  {
    name: "灯真",
    gender: "MALE",
    voiceStyles: ["かっこいい", "クール", "甘い", "優雅"],
  },
  {
    name: "ヴィヴィアン",
    gender: "FEMALE",
    voiceStyles: ["勝ち気", "ツンデレ", "活発"],
  },
  {
    name: "桜庭 恭平",
    gender: "MALE",
    voiceStyles: ["ワイルド", "陽気", "低音", "飄々とした"],
  },
  {
    name: "イルミル",
    gender: "MALE",
    voiceStyles: ["さわやか", "少年", "中性的"],
  },
  {
    name: "篠崎 優也",
    gender: "MALE",
    voiceStyles: ["内向的", "落ち着いた", "おどおどする", "ナレーション"],
  },
  {
    name: "ノエラ",
    gender: "FEMALE",
    voiceStyles: ["澄んだ", "幼い", "ツンデレ"],
  },
  {
    name: "ヴィクター・D・アシュフォード",
    gender: "MALE",
    voiceStyles: ["ワイルド", "おじさん", "成熟", "低音"],
  },
  {
    name: "エヴァニア・ノクターン",
    gender: "FEMALE",
    voiceStyles: ["成熟", "お姉さん", "かっこいい", "魅惑的"],
  },
  {
    name: "ロザリア・ガーネット",
    gender: "FEMALE",
    voiceStyles: ["お嬢様", "内向的", "澄んだ", "上品"],
  },
  {
    name: "李 昊天",
    gender: "MALE",
    voiceStyles: ["熱血", "真面目", "頼りになる"],
  },
  {
    name: "蘭華",
    gender: "FEMALE",
    voiceStyles: ["お姉さん", "頼りになる", "ナレーション"],
  },
  {
    name: "トリッカ",
    gender: "FEMALE",
    voiceStyles: ["ロリ", "軽快", "陽気", "お茶目"],
  },
  {
    name: "霧島 律",
    gender: "MALE",
    voiceStyles: ["落ち着いた", "大人しい", "クール", "ツンデレ"],
  },
  {
    name: "春玲",
    gender: "FEMALE",
    voiceStyles: ["頼りになる", "優しい", "お姉さん", "先輩"],
  },
  {
    name: "白熊 愛鈴",
    gender: "FEMALE",
    voiceStyles: ["ロリ", "陽気", "活発", "お茶目"],
  },
  {
    name: "星川 青葉",
    gender: "FEMALE",
    voiceStyles: ["勝ち気", "自信満々", "ツンデレ"],
  },
  {
    name: "シャルロッテ",
    gender: "FEMALE",
    voiceStyles: ["上品", "優雅", "お嬢様"],
  },
  {
    name: "高嶺 陽菜",
    gender: "FEMALE",
    voiceStyles: ["先輩", "優しい", "素直", "さわやか"],
  },
  {
    name: "森野 颯太",
    gender: "MALE",
    voiceStyles: ["おどおどする", "せっかち", "少年"],
  },
  {
    name: "若宮 紬",
    gender: "FEMALE",
    voiceStyles: ["落ち着いた", "大人しい", "澄んだ", "魅力的"],
  },
  {
    name: "黛 セナ",
    gender: "MALE",
    voiceStyles: ["クール", "インテリ", "マイペース", "飄々とした"],
  },
  {
    name: "高坂 茉莉",
    gender: "FEMALE",
    voiceStyles: ["活発", "陽気", "お茶目"],
  },
  {
    name: "淵",
    gender: "MALE",
    voiceStyles: ["上品", "優雅", "落ち着いた", "インテリ"],
  },
  {
    name: "深景",
    gender: "MALE",
    voiceStyles: ["知的", "澄んだ", "かっこいい", "飄々とした"],
  },
  {
    name: "レヴィエル",
    gender: "MALE",
    voiceStyles: ["軽快", "自信満々", "勝ち気", "少年"],
  },
  {
    name: "久咲 悠仁",
    gender: "MALE",
    voiceStyles: ["素直", "知的", "温かい", "さわやか"],
  },
  {
    name: "ティニー",
    gender: "MALE",
    voiceStyles: ["幼い", "素朴", "マイペース", "少年"],
  },
  {
    name: "白天",
    gender: "MALE",
    voiceStyles: ["落ち着いた", "素朴", "温かい", "ナレーション"],
  },
  {
    name: "黒崎 里穂",
    gender: "FEMALE",
    voiceStyles: ["大人しい", "おどおどする", "澄んだ"],
  },
  {
    name: "イリヤ・カレント",
    gender: "MALE",
    voiceStyles: ["自信満々", "飄々とした", "インテリ"],
  },
  {
    name: "リュウセイ",
    gender: "MALE",
    voiceStyles: ["熱血", "軽快", "陽気"],
  },
  {
    name: "白石 玲奈",
    gender: "FEMALE",
    voiceStyles: ["お嬢様", "かわいい", "お茶目"],
  },
  {
    name: "如月 要",
    gender: "MALE",
    voiceStyles: ["魅力的", "クール", "優雅", "ツンデレ"],
  },
  {
    name: "ラファエル・グリモワール",
    gender: "MALE",
    voiceStyles: ["クール", "知的", "低音", "成熟", "上品", "優雅"],
  },
  {
    name: "春野 奏汰",
    gender: "MALE",
    voiceStyles: ["素直", "澄んだ", "陽気", "おどおどする"],
  },
  {
    name: "篝",
    gender: "FEMALE",
    voiceStyles: ["澄んだ", "ミステリアス", "魅力的", "個性的", "優雅"],
  },
  {
    name: "小夜",
    gender: "FEMALE",
    voiceStyles: ["落ち着いた", "クール", "澄んだ", "幼い"],
  },
  {
    name: "天野 柩",
    gender: "FEMALE",
    voiceStyles: ["お姉さん", "ミステリアス", "ヤンデレ"],
  },
  {
    name: "森宮 千乃",
    gender: "FEMALE",
    voiceStyles: ["優しい", "かわいい", "素直"],
  },
  {
    name: "森下 和花",
    gender: "FEMALE",
    voiceStyles: ["優しい", "素朴", "温かい"],
  },
  {
    name: "フィーナ・ルナリエ",
    gender: "FEMALE",
    voiceStyles: ["さわやか", "甘い", "かわいい", "個性的"],
  },
  {
    name: "春日 ひまり",
    gender: "FEMALE",
    voiceStyles: ["ロリ", "陽気", "かわいい", "お茶目"],
  },
  {
    name: "月白 織",
    gender: "FEMALE",
    voiceStyles: ["かわいい", "個性的", "マイペース"],
  },
  {
    name: "篠ノ井 志乃",
    gender: "FEMALE",
    voiceStyles: ["知的", "優雅", "クール"],
  },
  {
    name: "凛堂 葵",
    gender: "FEMALE",
    voiceStyles: ["真面目", "かっこいい", "クール", "知的"],
  },
  {
    name: "橘 志穂",
    gender: "FEMALE",
    voiceStyles: ["頼りになる", "先輩", "お姉さん"],
  },
  {
    name: "ミミ",
    gender: "FEMALE",
    voiceStyles: ["ロリ", "幼い", "かわいい", "個性的"],
  },
  {
    name: "ベン・カーター",
    gender: "MALE",
    voiceStyles: ["低音", "ワイルド", "おじさん", "ナレーション"],
  },
  {
    name: "エリオル",
    gender: "MALE",
    voiceStyles: ["少年", "中性的", "優しい", "澄んだ", "落ち着いた"],
  },
  {
    name: "燻 秋雄",
    gender: "MALE",
    voiceStyles: ["成熟", "低音", "優雅", "魅力的", "自信満々"],
  },
  {
    name: "玄蔵",
    gender: "MALE",
    voiceStyles: ["関西弁", "個性的", "おじさん"],
  },
  {
    name: "桜庭 詩織",
    gender: "FEMALE",
    voiceStyles: ["真面目", "ツンデレ"],
  },
  {
    name: "ルチカ",
    gender: "MALE",
    voiceStyles: ["少年", "活発", "陽気", "お茶目", "せっかち"],
  },
  {
    name: "水瀬 玲奈",
    gender: "FEMALE",
    voiceStyles: ["素直", "活発", "陽気", "お茶目"],
  },
  {
    name: "橘 すずか",
    gender: "FEMALE",
    voiceStyles: ["陽気", "活発", "個性的"],
  },
  {
    name: "ジャナーフ",
    gender: "MALE",
    voiceStyles: ["かっこいい", "成熟", "低音", "優雅"],
  },
  {
    name: "シュネー・レオパーダ",
    gender: "MALE",
    voiceStyles: ["かっこいい", "クール", "知的", "低音"],
  },
  {
    name: "月島 千遥",
    gender: "MALE",
    voiceStyles: ["クール", "インテリ", "ツンデレ"],
  },
  {
    name: "有馬 慎一郎",
    gender: "MALE",
    voiceStyles: ["優しい", "さわやか", "澄んだ", "真面目", "ナレーション"],
  },
  {
    name: "新堂 慶介",
    gender: "MALE",
    voiceStyles: ["陽気", "先輩", "ワイルド", "飄々とした"],
  },
  {
    name: "オリバー・ジェームズ",
    gender: "MALE",
    voiceStyles: ["活発", "陽気", "お茶目", "犬系"],
  },
  {
    name: "ハオラン",
    gender: "MALE",
    voiceStyles: ["素直", "内向的", "おどおどする"],
  },
  {
    name: "小鳥遊 緑音",
    gender: "MALE",
    voiceStyles: ["澄んだ", "少年", "中性的", "内向的"],
  },
  {
    name: "碧海 凪",
    gender: "MALE",
    voiceStyles: ["甘い", "温かい", "マイペース", "落ち着いた"],
  },
  {
    name: "マーピン・ティンカー",
    gender: "MALE",
    voiceStyles: ["素朴", "優しい", "素直", "おじさん"],
  },
  {
    name: "燐灯",
    gender: "MALE",
    voiceStyles: ["少年", "中性的", "クール"],
  },
  {
    name: "金城 夏海",
    gender: "FEMALE",
    voiceStyles: ["勝ち気", "ツンデレ", "個性的"],
  },
  {
    name: "エリカ・ヴァルトハイム",
    gender: "FEMALE",
    voiceStyles: ["落ち着いた", "かっこいい", "クール", "お姉さん"],
  },
  {
    name: "照月院 輝臣",
    gender: "MALE",
    voiceStyles: ["優しい", "温かい", "上品", "優雅", "ナレーション"],
  },
  {
    name: "ミレア",
    gender: "FEMALE",
    voiceStyles: ["優しい", "澄んだ", "温かい", "優雅"],
  },
  {
    name: "リリィ・アルト",
    gender: "FEMALE",
    voiceStyles: ["ロリ", "かわいい", "活発", "陽気"],
  },
  {
    name: "高宮 涼香",
    gender: "FEMALE",
    voiceStyles: ["上品", "優しい", "知的", "ナレーション"],
  },
  {
    name: "神薙 瞳",
    gender: "FEMALE",
    voiceStyles: ["頼りになる", "お姉さん", "自信満々", "勝ち気"],
  },
  {
    name: "深沢 美咲",
    gender: "FEMALE",
    voiceStyles: ["頼りになる", "お姉さん", "かっこいい"],
  },
  {
    name: "椎名 結衣",
    gender: "FEMALE",
    voiceStyles: ["かわいい", "陽気", "活発"],
  },
  {
    name: "跳々",
    gender: "FEMALE",
    voiceStyles: ["個性的", "犬系", "軽快", "お茶目"],
  },
  {
    name: "アナスタシア",
    gender: "FEMALE",
    voiceStyles: ["お姉さん", "知的", "魅力的", "ミステリアス"],
  },
  {
    name: "宝泉寺 ミリア",
    gender: "FEMALE",
    voiceStyles: ["素直", "かわいい", "勝ち気"],
  },
  {
    name: "春乃 セリーヌ 白鳥",
    gender: "FEMALE",
    voiceStyles: ["内向的", "優しい", "澄んだ", "真面目"],
  },
  {
    name: "サンタクロース",
    gender: "MALE",
    voiceStyles: ["優しい", "温かい", "おじさん"],
  },
  {
    name: "藤崎 直人",
    gender: "MALE",
    voiceStyles: ["ナレーション", "温かい", "素朴", "落ち着いた"],
  },
  {
    name: "白波瀬 和香",
    gender: "FEMALE",
    voiceStyles: ["ナレーション", "温かい", "素朴", "落ち着いた"],
  },
];

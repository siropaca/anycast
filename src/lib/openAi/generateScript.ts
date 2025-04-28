import { callChatGpt } from "./callChatGpt.js";

const instructions = `
与えられたテーマについて、2人が会話形式で解説を行う台本を作成してください。

登場人物の設定は以下の通りです。
- 深海 結涼（ふかみ ゆず）
  - 知識が豊富で冷静沈着な若い女性
  - ですますは使わず、先生のような口調
- 森野 颯太（もりの そうた）
  - 知識はあまりないが好奇心旺盛で陽気な若い男性
  - 深海 結涼に対しては敬語

出力形式は、以下のようなJSON配列としてください。
[
  {
    "actorName": "深海 結涼",
    "line": "こんにちは"
  },
  {
    "actorName": "森野 颯太",
    "line": "こんにちは"
  }
]

制約事項：
- 会話はすべて日本語で行ってください。
- 文中に「！」は使用しないでください。
- 漢字やカタカナはそのまま使用して構いません。
- アルファベット表記は避け、一般的なカタカナ表記に変換してください。
  - 例：JavaScript → ジャバスクリプト、Next.js → ネクストジェーエス、Nuxt → ナクスト、React → リアクト
- 会話は、与えられたテーマに沿って、2人が解説を深めながら進行してください。
- 会話の長さは最大で10往復（20発言）以内としてください。
`;

export async function generateScript(
  input: string
): Promise<Array<{ actorName: string; line: string }>> {
  const response = await callChatGpt({
    instructions,
    input,
  });

  return JSON.parse(response);
}

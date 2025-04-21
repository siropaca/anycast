import { getEnvVar } from "./env";

interface Params {
  actorId: string;
  // 音声を合成するテキスト。3,000文字まで一度に生成可能です。
  // また、<sp 1.0>xxxのようにタグで囲むことで、タグ内のテキストのスピードを変更することができます。
  // <wait 0.3>のようにタグを入れると、入力した秒数分だけ間を挿入することができます。
  word: string;
  // 読み上げのスピード (0.4 〜 3.0)
  speed: number;
  // 音声の感情的な変動を制御します。
  // 値が小さいほど滑らかに、大きいほど感情豊かになります。(0 〜 1.5)
  // 未指定の場合は、指定したVoice Actorの感情レベルの推奨値が使用されます。
  emotionalLevel?: number;
  // 音素の発音の長さを制御します。
  // 値が小さいほど短く、大きいほど長くなります。(0 〜 1.7)
  // 未指定の場合は、指定したVoice Actorの音素の発音の長さの推奨値が使用されます。
  soundDuration?: number;
}

interface Response {
  generatedVoice: {
    audioFileUrl: string;
    audioFileDownloadUrl: string;
    duration: number;
    remainingCredits: number;
  };
}

export function fetchNijiVoice({
  actorId,
  word,
  speed,
  emotionalLevel,
  soundDuration,
}: Params): Promise<Response> {
  const { nijiVoiceApiKey } = getEnvVar();

  const url = `https://api.nijivoice.com/api/platform/v1/voice-actors/${actorId}/generate-voice`;

  const body = {
    format: "mp3",
    script: word,
    speed: String(speed),
  };

  if (emotionalLevel) {
    body.emotionalLevel = String(emotionalLevel);
  }

  if (soundDuration) {
    body.soundDuration = String(soundDuration);
  }

  const options = {
    method: "POST",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
      "x-api-key": nijiVoiceApiKey,
    },
    body: JSON.stringify(body),
  };

  return fetch(url, options)
    .then((res) => res.json())
    .then((json) => json)
    .catch((err) => console.error(err));
}

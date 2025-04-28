//--------------------------------------------------------------
// GenerateVoice
//--------------------------------------------------------------

export interface GenerateVoiceParams {
  // Voice actor ID
  actorId: string;

  // 音声を合成するテキスト。3,000文字まで一度に生成可能です。
  // また、<sp 1.0>xxxのようにタグで囲むことで、タグ内のテキストのスピードを変更することができます。
  // <wait 0.3>のようにタグを入れると、入力した秒数分だけ間を挿入することができます。
  script: string;

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

export interface GenerateVoiceRequestBody {
  format: string;
  script: string;
  speed: string;
  emotionalLevel?: string;
  soundDuration?: string;
}

export interface GenerateVoiceResponse {
  generatedVoice: {
    audioFileUrl: string;
    audioFileDownloadUrl: string;
    duration: number;
    remainingCredits: number;
  };
}

//--------------------------------------------------------------
// GetVoiceActors
//--------------------------------------------------------------

export interface GetVoiceActorsResponse {
  voiceActors: VoiceActor[];
}

export interface VoiceActor {
  id: string; // Voice actor ID
  name: string; // 名前
  nameReading: string; // 名前の読み
  gender: "MALE" | "FEMALE"; // 性別
  birthMonth: number; // 誕生月
  birthDay: number; // 誕生日
  smallImageUrl: string; // 小さい画像URL
  mediumImageUrl: string; // 中くらいの画像URL
  largeImageUrl: string; // 大きい画像URL
  sampleVoiceUrl: string; // サンプルボイス
  sampleScript: string; // サンプルセリフ
  recommendedVoiceSpeed: number; // 推奨ボイススピード
  recommendedEmotionalLevel: number; // 推奨感情レベル
  recommendedSoundDuration: number; // 推奨音素の発音の長さ
  voiceStyles: {
    id: number; // 声のスタイルID
    style: string; // 声のスタイル
  }[];
}

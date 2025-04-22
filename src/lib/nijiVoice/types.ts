export interface VoiceParams {
  actorId: string
  // 音声を合成するテキスト。3,000文字まで一度に生成可能です。
  // また、<sp 1.0>xxxのようにタグで囲むことで、タグ内のテキストのスピードを変更することができます。
  // <wait 0.3>のようにタグを入れると、入力した秒数分だけ間を挿入することができます。
  script: string
  // 読み上げのスピード (0.4 〜 3.0)
  speed: number
  // 音声の感情的な変動を制御します。
  // 値が小さいほど滑らかに、大きいほど感情豊かになります。(0 〜 1.5)
  // 未指定の場合は、指定したVoice Actorの感情レベルの推奨値が使用されます。
  emotionalLevel?: number
  // 音素の発音の長さを制御します。
  // 値が小さいほど短く、大きいほど長くなります。(0 〜 1.7)
  // 未指定の場合は、指定したVoice Actorの音素の発音の長さの推奨値が使用されます。
  soundDuration?: number
}

export interface RequestBody {
  format: string
  script: string
  speed: string
  emotionalLevel?: string
  soundDuration?: string
}

export interface VoiceResponse {
  generatedVoice: {
    audioFileUrl: string
    audioFileDownloadUrl: string
    duration: number
    remainingCredits: number
  }
}

//--------------------------------------------------------------
// Types
//--------------------------------------------------------------

export type ActorName =
  | "深海 結涼"
  | "春野 奏汰"
  | "小鳥遊 緑音"
  | "金城 夏海"
  | "新堂 慶介"
  | "苔村 まりも"
  | "ヴィクター・D・アシュフォード"

type ActorInfo = {
  name: ActorName
  id: string
  speed: number
  note: string
}

//--------------------------------------------------------------
// Constants
//--------------------------------------------------------------

const ACTORS: ActorInfo[] = [
  {
    name: "深海 結涼",
    id: "90031163-c497-44f3-a8a6-e45e4d0cb8f6",
    speed: 0.8,
    note: "落ち着いた少女",
  },
  {
    name: "春野 奏汰",
    id: "0a1f77b7-db87-4c35-9e31-5c6155097124",
    speed: 0.8,
    note: "青少年",
  },
  {
    name: "小鳥遊 緑音",
    id: "b9277ce3-ba1c-4f6f-9a65-c05ca102ded0",
    speed: 0.8,
    note: "少年",
  },
  {
    name: "金城 夏海",
    id: "5c7f729f-5814-436f-9e81-95aa837f9737",
    speed: 0.9,
    note: "ギャル",
  },
  {
    name: "新堂 慶介",
    id: "48f0a19c-660c-42a8-906b-e466caafe305",
    speed: 0.85,
    note: "おじさん",
  },
  {
    name: "苔村 まりも",
    id: "2f982b65-dbc3-4ed6-b355-b0f7c0abaa70",
    speed: 0.85,
    note: "マイペース",
  },
  {
    name: "ヴィクター・D・アシュフォード",
    id: "4407962b-8901-447a-8e0e-7896a0d230c0",
    speed: 0.95,
    note: "ワイルドおじさん",
  },
]

//--------------------------------------------------------------
// Functions
//--------------------------------------------------------------

export function getActorInfo(actorName: ActorName): ActorInfo {
  const actor = ACTORS.find((actor) => actor.name === actorName)

  if (!actor) {
    throw new Error(`Actor not found: ${actorName}`)
  }

  return actor
}

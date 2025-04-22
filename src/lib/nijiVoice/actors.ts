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
  | "陽斗・エイデン・グリーンウッド"
  | "三浦 隼人"
  | "篠崎 優也"
  | "李 昊天";

type ActorInfo = {
  name: ActorName;
  id: string;
  speed: number;
  note: string;
};

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
    speed: 0.6,
    note: "ワイルドおじさん",
  },
  {
    name: "陽斗・エイデン・グリーンウッド",
    id: "29cdf589-e581-4ab0-8467-0cd0c7ba640f",
    speed: 0.8,
    note: "少年",
  },
  {
    name: "三浦 隼人",
    id: "65721129-028e-4fcc-8b9d-9974f670fe94",
    speed: 0.8,
    note: "落ち着いた",
  },
  {
    name: "篠崎 優也",
    id: "b6d08e70-dbbb-48cc-b808-d4b3fad1eea8",
    speed: 0.8,
    note: "おどおど",
  },
  {
    name: "李 昊天",
    id: "f35cb410-d2e8-40ad-8bce-9235951528ed",
    speed: 0.8,
    note: "おどおど",
  },
];

//--------------------------------------------------------------
// Functions
//--------------------------------------------------------------

export function getActorInfo(actorName: ActorName): ActorInfo {
  const actor = ACTORS.find((actor) => actor.name === actorName);

  if (!actor) {
    throw new Error(`Actor not found: ${actorName}`);
  }

  return actor;
}

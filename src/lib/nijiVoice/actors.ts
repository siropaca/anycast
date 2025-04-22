const ACTORS = [
  {
    name: "深海 結涼",
    id: "90031163-c497-44f3-a8a6-e45e4d0cb8f6",
  },
  {
    name: "春野 奏汰",
    id: "0a1f77b7-db87-4c35-9e31-5c6155097124",
  },
]

type ActorName = (typeof ACTORS)[number]["name"]

export function getActorId(name: ActorName): string {
  const actor = ACTORS.find((actor) => actor.name === name)

  if (!actor) {
    throw new Error(`Actor not found: ${name}`)
  }

  return actor.id
}

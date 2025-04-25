import type { VoiceActor } from "./types.js";

export function findActor(voiceActors: VoiceActor[], actorName: string): VoiceActor {
  const actor = voiceActors.find((actor) => actor.name === actorName);

  if (!actor) {
    throw new Error(`Actor not found: ${actorName}`);
  }

  return actor;
}

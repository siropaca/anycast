import { INSTRUCTIONS } from "../../config/instructions.js";
import { callClaude } from "./callClaude.js";

export async function generateScript(
  input: string,
): Promise<Array<{ actorName: string; line: string }>> {
  const response = await callClaude({
    instructions: INSTRUCTIONS,
    input,
  });

  return JSON.parse(response);
}

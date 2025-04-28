import { callClaude } from "./callClaude.js";
import { instructions } from "../../config/instructions.js";

export async function generateScript(
  input: string
): Promise<Array<{ actorName: string; line: string }>> {
  const response = await callClaude({
    instructions,
    input,
  });

  return JSON.parse(response);
}

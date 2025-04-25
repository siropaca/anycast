import { callClaude } from "./callClaude.js";

const instructions = ``;

export async function generateScript(theme: string): Promise<string> {
  return callClaude({
    instructions,
    input: theme,
  });
}

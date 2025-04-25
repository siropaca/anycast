import { callClaude } from "./callClaude.js";

const instructions = `
You are a coding assistant that talks like a pirate.
You are given a task to generate a script for a website.
The script should be written in TypeScript.
The script should be written in the style of a pirate.
The script should be written in the style of a pirate.
`;

export async function generateScript(theme: string): Promise<string> {
  return callClaude({
    instructions,
    input: theme,
  });
}

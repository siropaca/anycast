import { callClaude } from "./callClaude.js";

const instructions = `
日本語で話してください。
`;

export async function generateScript(theme: string): Promise<string> {
  return callClaude({
    instructions,
    input: theme,
  });
}

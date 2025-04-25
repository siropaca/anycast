import { callChatGpt } from "./callChatGpt.js";

const instructions = `
日本語で話してください。
`;

export async function generateScript(theme: string): Promise<string> {
  return callChatGpt({
    instructions,
    input: theme,
  });
}

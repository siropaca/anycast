import { callChatGpt } from "./callChatGpt.js";

const instructions = ``;

export async function generateScript(theme: string): Promise<string> {
  return callChatGpt({
    instructions,
    input: theme,
  });
}

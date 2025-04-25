import type { ChatModel } from "openai/resources/shared.js";
import { client } from "./client.js";

export interface ChatGptParams {
  model?: ChatModel;
  instructions?: string;
  input: string;
}

/**
 * ChatGPT を呼び出す
 *
 * @example
 * callChatGpt({
 *   model: "gpt-4o",
 *   instructions: "You are a coding assistant that talks like a pirate",
 *   input: "Are semicolons optional in JavaScript?",
 * });
 */
export async function callChatGpt({
  model = "gpt-4o",
  instructions,
  input,
}: ChatGptParams): Promise<string> {
  try {
    const response = await client.responses.create({
      model,
      ...(instructions && { instructions }),
      input,
    });

    return response.output_text;
  } catch (error) {
    console.error("エラー:", error);
    throw error;
  }
}

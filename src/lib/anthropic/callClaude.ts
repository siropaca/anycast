import { client } from "./client.js";

export interface ClaudeParams {
  model?: string; // https://docs.anthropic.com/en/docs/about-claude/models/all-models
  instructions?: string;
  input: string;
}

/**
 * Claude を呼び出す
 *
 *
 * @example
 * callClaude({
 *   model: "claude-3-7-sonnet-20250219",
 *   instructions: "You are a coding assistant that talks like a pirate",
 *   input: "Are semicolons optional in JavaScript?",
 * });
 */
export async function callClaude({
  model = "claude-3-7-sonnet-20250219",
  instructions,
  input,
}: ClaudeParams): Promise<string> {
  try {
    const response = await client.messages.create({
      model,
      max_tokens: 1024,
      temperature: 1,
      system: instructions,
      messages: [{ role: "user", content: input }],
    });

    const content = response.content[0];

    if (content.type !== "text") {
      throw new Error("Unexpected response type");
    }

    return content.text;
  } catch (error) {
    console.error("エラー:", error);
    throw error;
  }
}

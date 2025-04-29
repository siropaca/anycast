import type { ChatModel } from "openai/resources/shared.js";
import { client } from "./client.js";

interface ChatGptParams {
  model?: ChatModel;
  instructions?: string;
  input: string;
}

/**
 * ChatGPT を呼び出す
 *
 * @example
 * callChatGpt({
 *   model: "gpt-4.1",
 *   instructions: "You are a coding assistant that talks like a pirate",
 *   input: "Are semicolons optional in JavaScript?",
 * });
 */
export async function callChatGpt({
  model = "gpt-4.1",
  instructions,
  input,
}: ChatGptParams): Promise<string> {
  try {
    const response = await client.responses.create({
      model,
      // text: { format: { type: "json_object" } },
      tools: [
        // DOC: https://platform.openai.com/docs/guides/tools-web-search
        {
          type: "web_search_preview",
          search_context_size: "medium",
          user_location: {
            type: "approximate",
            country: "JP",
            city: "Tokyo",
            region: "Tokyo",
          },
        },
      ],
      ...(instructions && { instructions }),
      input,
    });

    return response.output_text;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}

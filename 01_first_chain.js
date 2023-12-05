import { config } from "dotenv";
config();
import { OpenAI } from "langchain/llms/openai";
import { PromptTemplate } from "langchain/prompts";
import { LLMChain } from "langchain/chains";

// Assuming OpenAI class is part of the "langchain/llms/openai" module
const model = new OpenAI({ temperature: 0 });

const template = `
  Be very funny when answering questions
  Question: {question}
`;

// Assuming PromptTemplate class is part of the "langchain/prompts" module
const prompt = new PromptTemplate({ template, inputVariables: ["question"] });

// Assuming LLMChain class is part of the "langchain/chains" module
const chain = new LLMChain({ llm: model, prompt });

async function main() {
  const result = await chain.call({ question: "how to write a research paper" });
  console.log(result);
}

main();

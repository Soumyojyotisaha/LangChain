import { OpenAI } from "langchain/llms/openai";
import { LLMChain } from "langchain/chains";
import { PromptTemplate } from "langchain/prompts";

const openai_api_key = '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';

const model = new OpenAI({
  temperature: 0.9,
  openAIApiKey: openai_api_key,
});

const template = "Give me information about {topic}?";
const prompt = new PromptTemplate({
  template: template,
  inputVariables: ["topic"],
});

(async () => {
  // const prompt_info = await prompt.format({
  //     topic: 'Langchain'
  // });
  const chain = new LLMChain({ llm: model, prompt: prompt });
  const response = await chain.call({
    topic: 'Sam Altman',
  });
  console.log(response);
})();

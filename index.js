import { OpenAI } from "langchain/llms/openai";
import { LLMChain } from "langchain/chains";
import { PromptTemplate } from "langchain/prompts";
import { AgentExecutor, initializeAgentExecutorWithOptions } from "langchain/agents";
import { SerpAPI } from "langchain/tools";

const openai_api_key = '';

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

const tools = [
   new SerpAPI('', {
    location: "Austin,Texas,United States",
    hl: "en",
    g: "us",
  }),
]
//   const chain = new LLMChain({ llm: model, prompt: prompt });
//   const response = await chain.call({
//     topic: 'Langchain',
//   });
//   console.log(response);

  const agent = await initializeAgentExecutorWithOptions(tools, model, {
    agentType: "zero-shot-react-description",
    verbose: true,
  });
  const input = 'how to earn 1 lakh rupees in 2 days?';
  const result = await agent.call({ input });
  console.log(result);
})();

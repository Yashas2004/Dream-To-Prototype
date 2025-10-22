import{ openai, createAgent} from "@inngest/agent-kit"
import { inngest } from "./client";

export const helloWorld = inngest.createFunction(
  { id: "hello-world" },
  { event: "test/hello.world" },
  async ({ event }) => {
    const codeAgent = createAgent({
      name: "code-agent",
      system: "you are an expert next.js developer. you write readable,maintainable code.you write simple next.js & React snippets.",
      model: openai({ model: "gpt-4o" }),
    });
    const { output } = await codeAgent.run(
      `Write the following snippet: ${event.data.value}`,
    );
    console.log(output);
    //imagine this is a transcript step

    return { output };
  },
);
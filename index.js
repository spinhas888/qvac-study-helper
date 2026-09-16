import {
  loadModel,
  LLAMA_3_2_1B_INST_Q4_0,
  completion,
  unloadModel
} from "@qvac/sdk";

console.log("📚 QVAC Local Study Helper");
console.log("Loading local AI model...\n");

const modelId = await loadModel({
  modelSrc: LLAMA_3_2_1B_INST_Q4_0,
  onProgress: (p) => {
    console.log(`Downloading model: ${p.percentage.toFixed(0)}%`);
  }
});

const studyNotes = `
Photosynthesis is the process by which plants convert light energy
into chemical energy. Plants use sunlight, water, and carbon dioxide
to produce glucose and oxygen.
`;

const history = [
  {
    role: "user",
    content: `
You are a local AI study assistant.

Read these study notes:

${studyNotes}

Create:
1. A short summary.
2. Three study questions.
3. One important fact to remember.

Keep the answer concise.
`
  }
];

console.log("\nGenerating study material locally...\n");

const result = completion({
  modelId,
  history,
  stream: true
});

for await (const token of result.tokenStream) {
  process.stdout.write(token);
}

console.log("\n\n✅ Generated completely on-device with QVAC.");

await unloadModel({ modelId });

// test-openai.js
import OpenAI from "openai";

// ================== Apni API key yahan daalein ==================
const openai = new OpenAI({
  apiKey: "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",
});

// ================== API Test Function ==================
async function testAPI() {
  try {
    const response = await openai.responses.create({
      model: "gpt-5-nano",
      input: "Hello! Test if API is working.",
      store: true,
    });

    console.log("✅ API Response:", response.output_text);
  } catch (err) {
    console.error("❌ API Error:", err);
  }
}

// Run the test
testAPI();
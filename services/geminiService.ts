import { GoogleGenAI } from "@google/genai";

// Initialize the client
// API Key is injected via process.env.API_KEY as per instructions
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getGeminiResponse = async (
  userMessage: string,
  context: string = "general"
): Promise<string> => {
  try {
    const modelId = 'gemini-2.5-flash'; // Efficient model for chat
    
    let systemInstruction = "";
    
    if (context === 'merchant') {
      systemInstruction = `
        أنت مساعد ذكي لمنصة "راي" (RAY) للتجار.
        دورك مساعدة التاجر في كتابة وصف للمنتجات، تحليل المبيعات، واقتراح أفكار تسويقية.
        تحدث باللغة العربية بلهجة مصرية مهنية ومحترفة.
        اسمك "مساعد راي".
      `;
    } else {
      systemInstruction = `
        أنت مساعد ذكي لمنصة "راي" (RAY) للمتسوقين.
        دورك مساعدة المستخدم في العثور على المطاعم، المحلات، والخدمات.
        تحدث باللغة العربية بلهجة مصرية ودودة.
        اسمك "مساعد راي".
      `;
    }

    const response = await ai.models.generateContent({
      model: modelId,
      contents: userMessage,
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.7,
      },
    });

    return response.text || "عذراً، لم أستطع فهم ذلك.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "حدث خطأ في الاتصال بالمساعد الذكي. يرجى المحاولة لاحقاً.";
  }
};

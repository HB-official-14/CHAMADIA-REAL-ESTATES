import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

const SYSTEM_PROMPT = `You are ChamadiaZ AI, the intelligent real estate assistant for Chamadia Real Estates, a premium real estate company in Pakistan.

Your role is to help users find properties, answer questions about projects, explain payment plans, and collect lead information.

Company Context:
- CEO & Founder: Hamza Chamadia (03000262592)
- CEO & Founder: Mustafa Chamadia (03352266358)
- Email: chamadiarealestates@gmail.com
- Address: Callachi Society, Gulshan-e-Iqbal, Block 10-A, Karachi, Pakistan
- Services: Property Sales, Property Rentals, Investment Advisory, Property Management, Consultation

Always be professional, friendly, and helpful.
Only provide information that is available in the context above.
Never invent property details, prices, or contact information.
Keep responses concise and helpful (2-3 paragraphs max).

When a user shows interest in a property:
1. Ask for their name
2. Ask for their phone number
3. Ask for their email
4. Ask about their budget
5. Offer to book a site visit

If asked about specific property listings, projects, or pricing, explain that you'd need their contact details to have a team member follow up with personalized information.`;

const apiKey = process.env.GEMINI_API_KEY;

function getClient() {
  if (!apiKey || apiKey === "your-gemini-api-key-here") {
    return null;
  }
  return new GoogleGenerativeAI(apiKey);
}

export async function POST(request: Request) {
  try {
    const { message, history } = await request.json();

    if (!message || typeof message !== "string") {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 }
      );
    }

    const genAI = getClient();

    if (!genAI) {
      return NextResponse.json(
        {
          message:
            "The AI assistant is currently being set up. Please contact us directly at chamadiarealestates@gmail.com or call 03000262592. We'd be happy to help!",
        },
        { status: 200 }
      );
    }

    const model = genAI.getGenerativeModel({
      model: "gemini-2.0-flash-lite",
      systemInstruction: SYSTEM_PROMPT,
    });

    const chatHistory = (history || []).map(
      (m: { role: string; content: string }) => ({
        role: m.role === "assistant" ? "model" : "user",
        parts: [{ text: m.content }],
      })
    );

    const chat = model.startChat({
      history: chatHistory,
    });

    const result = await chat.sendMessage(message);
    const response = result.response.text();

    return NextResponse.json({ message: response });
  } catch (error: unknown) {
    const err = error as { status?: number; message?: string; errorDetails?: { reason?: string }[] };
    console.error("ChamadiaZ AI error:", err.status, err.message);

    if (err.status === 429 || err.status === 503) {
      return NextResponse.json(
        {
          message:
            "ChamadiaZ AI is currently experiencing high demand and is rate-limited. Please wait a moment and try again, or contact us directly at chamadiarealestates@gmail.com.",
        },
        { status: 200 }
      );
    }

    if (err.status === 403) {
      return NextResponse.json(
        {
          message:
            "ChamadiaZ AI is being configured. Please contact us directly at chamadiarealestates@gmail.com or call 03000262592.",
        },
        { status: 200 }
      );
    }

    return NextResponse.json(
      {
        message:
          "ChamadiaZ AI is temporarily unavailable. Please try again or contact us directly at chamadiarealestates@gmail.com.",
      },
      { status: 200 }
    );
  }
}

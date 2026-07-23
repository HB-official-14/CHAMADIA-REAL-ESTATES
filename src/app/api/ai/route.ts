import { NextResponse } from "next/server";
import { projects } from "@/data/projects";
import { plots } from "@/data/plots";

const PROJECTS_DATA = JSON.stringify(projects, null, 2);
const PLOTS_DATA = JSON.stringify(plots, null, 2);

const SYSTEM_PROMPT = `You are Chamadia AI, the intelligent Real Estate Sales Consultant for Chamadia Real Estates, a premium real estate company in Pakistan.

# Company Context
- Company: Chamadia Real Estates
- CEO & Founder: Hamza Chamadia (03000262592)
- CEO & Founder: Mustafa Chamadia (03352266358)
- Email: chamadiarealestates@gmail.com
- Address: Callachi Society, Gulshan-e-Iqbal, Block 10-A, Karachi, Pakistan
- Services: Property Sales, Property Rentals, Investment Advisory, Property Management, Consultation
- Website Projects: /projects
- Website Plots: /plots

# Projects Available
Here is the COMPLETE data for every project on the website. Use this data to answer questions about projects, apartments, sizes, amenities, etc. Do NOT invent any information not present here.

${PROJECTS_DATA}

# Plots Available
Here is the COMPLETE data for every plot on the website.

${PLOTS_DATA}

# Your Responsibilities

## 1. Recommend Projects
Help customers find the right project based on their needs:
- Budget considerations
- Family size
- Apartment size preference
- Luxury preference
- Investment or residential purpose
- Plot requirements

## 2. Answer Project Questions
Know every project's:
- Name, location, description
- Apartment types and sizes (square feet)
- Available bedrooms
- Amenities and features
- Possession status (if available)
- Plot information

## 3. Compare Projects
Compare projects professionally when asked. Show differences in a clear format. Example: Compare AA Residencia vs Centric Elite, or The Court Heights vs Shayan Iconic Palace, or apartments vs plots.

## 4. Help with Property Search
Help users find properties matching their criteria:
- "I need a 3 bedroom apartment" — recommend projects with 3 Bed units
- "I want luxury" — recommend premium projects like Titan One, Centric Elite, Shayan Iconic Palace
- "I need an investment property" — recommend projects with good investment potential
- "I need a family apartment" — recommend family-oriented projects
- "I want a plot" — recommend available plots with details

## 5. Book a Site Visit
When a customer wants to visit or book:
1. Ask for: Name, Phone Number, Preferred Date, Preferred Time, Which Project
2. After collecting all details, generate a professional WhatsApp message in this format:

Hello Chamadia Real Estates,

I would like to schedule a site visit.

Name: [customer name]
Phone: [customer phone]
Project: [project name]
Preferred Date: [date]
Preferred Time: [time]

Please confirm my appointment.

Then tell the user you can book it via WhatsApp and provide the booking details.

## 6. Contact Agent
If the customer wants to speak with someone, provide:
- Call Hamza Chamadia: 03000262592
- Call Mustafa Chamadia: 03352266358
- WhatsApp link for Hamza: https://wa.me/923000262592
- WhatsApp link for Mustafa: https://wa.me/923352266358

## 7. WhatsApp Enquiries
Generate professional WhatsApp messages for:
- Price enquiry
- Availability enquiry  
- Booking enquiry
- Visit request
- Investment enquiry
- General information

Format messages like:
Hello Chamadia Real Estates,

I am interested in [project/plot name] and would like more information about [purpose].

Please contact me at [phone].

## 8. Plot Assistance
Know both plots thoroughly:
- 240 Square Yards Residential Plot (240 Sq.Yd)
- 600 Square Yards Residential Plot (600 Sq.Yd)
- Location: Callachi Society, Karachi
- Recommend the right plot based on customer requirements

## 9. FAQ
Answer these common questions using the data:
- "Where are you located?" — Callachi Society, Gulshan-e-Iqbal, Block 10-A, Karachi
- "How can I book?" — Contact us via phone or WhatsApp, or request a site visit through me
- "How do I contact you?" — Call Hamza (03000262592) or Mustafa (03352266358), or email chamadiarealestates@gmail.com
- "Do you have plots?" — Yes, 240 Sq.Yd and 600 Sq.Yd residential plots at Callachi Society
- "Do you have apartments?" — Yes, multiple projects with 2, 3, 4, and 5 bedroom apartments
- "Which projects are available?" — List all projects from the data above
- "What amenities are available?" — Vary by project, listed in each project's amenities

# Personality
- Professional and friendly
- Knowledgeable and helpful
- Sales-oriented without being pushy
- Always encourage customers to: Book a visit, Contact an agent, Request pricing, Request more information
- Maintain a premium luxury real estate experience

# IMPORTANT RULES
- Never hallucinate information
- Always use the actual project/plot data provided above
- If information is unavailable, say: "Please contact Chamadia Real Estates for the latest information."
- Never make up prices, possession dates, or project details
- Keep responses concise and professional
- Use proper formatting for readability`;

const GROQ_API_URL = "https://api.groq.com/openai/v1/chat/completions";
const GROQ_MODEL = "llama-3.3-70b-versatile";

export async function POST(request: Request) {
  try {
    const { message, history } = await request.json();

    if (!message || typeof message !== "string") {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 }
      );
    }

    const apiKey = process.env.GROQ_API_KEY;

    if (!apiKey || apiKey === "your-groq-api-key-here") {
      return NextResponse.json(
        {
          message:
            "Chamadia AI is currently being set up. Please contact us directly at chamadiarealestates@gmail.com or call 03000262592. We'd be happy to help!",
        },
        { status: 200 }
      );
    }

    const messages = [
      { role: "system", content: SYSTEM_PROMPT },
      ...(history || []).map((m: { role: string; content: string }) => ({
        role: m.role === "assistant" ? "assistant" : "user",
        content: m.content,
      })),
      { role: "user", content: message },
    ];

    const response = await fetch(GROQ_API_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: GROQ_MODEL,
        messages,
        temperature: 0.7,
        max_tokens: 1024,
      }),
    });

    if (!response.ok) {
      const errorBody = await response.text();
      console.error("Groq API error:", response.status, errorBody);

      if (response.status === 429) {
        return NextResponse.json(
          {
            message:
              "Chamadia AI is currently experiencing high demand. Please wait a moment and try again, or contact us directly at chamadiarealestates@gmail.com.",
          },
          { status: 200 }
        );
      }

      if (response.status === 401 || response.status === 403) {
        return NextResponse.json(
          {
            message:
              "Chamadia AI is being configured. Please contact us directly at chamadiarealestates@gmail.com or call 03000262592.",
          },
          { status: 200 }
        );
      }

      return NextResponse.json(
        {
          message:
            "Chamadia AI is temporarily unavailable. Please try again or contact us directly at chamadiarealestates@gmail.com.",
        },
        { status: 200 }
      );
    }

    const data = await response.json();
    const reply = data.choices?.[0]?.message?.content;

    if (!reply) {
      return NextResponse.json(
        {
          message:
            "Chamadia AI is temporarily unavailable. Please try again or contact us directly at chamadiarealestates@gmail.com.",
        },
        { status: 200 }
      );
    }

    return NextResponse.json({ message: reply });
  } catch (error: unknown) {
    const err = error as Error;
    console.error("Chamadia AI error:", err.message);

    return NextResponse.json(
      {
        message:
          "Chamadia AI is temporarily unavailable. Please try again or contact us directly at chamadiarealestates@gmail.com.",
      },
      { status: 200 }
    );
  }
}

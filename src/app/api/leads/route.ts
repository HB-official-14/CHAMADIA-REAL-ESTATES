import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { leadFormSchema } from "@/lib/validations";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validation = leadFormSchema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json(
        { error: "Validation failed", details: validation.error.flatten() },
        { status: 400 }
      );
    }

    const data = validation.data;

    const lead = await prisma.lead.create({
      data: {
        name: data.name,
        phone: data.phone,
        email: data.email,
        interestedProject: data.interestedProject,
        budget: data.budget,
        source: data.source,
      },
    });

    return NextResponse.json({
      success: true,
      message: "Thank you! Your information has been received.",
      leadId: lead.id,
    });
  } catch {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

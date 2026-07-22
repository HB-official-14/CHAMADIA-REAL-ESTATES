import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { appointmentFormSchema } from "@/lib/validations";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validation = appointmentFormSchema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json(
        { error: "Validation failed", details: validation.error.flatten() },
        { status: 400 }
      );
    }

    const data = validation.data;

    const appointment = await prisma.appointment.create({
      data: {
        name: data.name,
        phone: data.phone,
        email: data.email,
        preferredDate: new Date(data.preferredDate),
        preferredTime: data.preferredTime,
        interestedProject: data.interestedProject,
        notes: data.notes,
      },
    });

    return NextResponse.json({
      success: true,
      message: "Appointment booked successfully! We will confirm your visit shortly.",
      appointmentId: appointment.id,
    });
  } catch {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

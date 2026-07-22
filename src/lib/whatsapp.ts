import { siteConfig } from "@/config/site";

export interface WhatsAppMessage {
  name: string;
  phone: string;
  email: string;
  interestedProject?: string;
  budget?: number;
  appointment?: {
    date: string;
    time: string;
  };
  aiSummary?: string;
  source: string;
}

export async function sendWhatsAppNotification(data: WhatsAppMessage): Promise<boolean> {
  const message = formatLeadMessage(data);

  const apiKey = process.env.WHATSAPP_API_KEY;
  const phoneNumberId = process.env.WHATSAPP_PHONE_NUMBER_ID;

  if (!apiKey || !phoneNumberId) {
    console.warn("WhatsApp API not configured");
    return false;
  }

  try {
    const response = await fetch(
      `https://graph.facebook.com/v18.0/${phoneNumberId}/messages`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messaging_product: "whatsapp",
          to: siteConfig.whatsapp,
          type: "text",
          text: { body: message },
        }),
      }
    );

    return response.ok;
  } catch (error) {
    console.error("WhatsApp notification failed:", error);
    return false;
  }
}

function formatLeadMessage(data: WhatsAppMessage): string {
  const lines = [
    "🏢 *New Lead - Chamadia Real Estates*",
    "",
    `*Name:* ${data.name}`,
    `*Phone:* ${data.phone}`,
    `*Email:* ${data.email}`,
    `*Source:* ${data.source}`,
  ];

  if (data.interestedProject) {
    lines.push(`*Interested Project:* ${data.interestedProject}`);
  }

  if (data.budget) {
    lines.push(`*Budget:* PKR ${data.budget.toLocaleString()}`);
  }

  if (data.appointment) {
    lines.push("");
    lines.push("*Appointment Details:*");
    lines.push(`  Date: ${data.appointment.date}`);
    lines.push(`  Time: ${data.appointment.time}`);
  }

  if (data.aiSummary) {
    lines.push("");
    lines.push("*AI Summary:*");
    lines.push(data.aiSummary);
  }

  return lines.join("\n");
}

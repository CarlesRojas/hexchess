import { createUser, deleteUser } from "@/server/repo/User"
import { UserWebhookEvent } from "@clerk/nextjs/dist/types/server"
import { NextRequest, NextResponse } from "next/server"
import { Webhook, WebhookRequiredHeaders } from "svix"
// export const config = { api: { bodyParser: false } }

const webhookSecret = process.env.CLERK_WEBHOOK_SECRET ?? ""

const handler = async (req: NextRequest) => {
  const payload = await req.json()
  const svixHeaders: WebhookRequiredHeaders = {
    "svix-id": req.headers.get("svix-id") ?? "",
    "svix-signature": req.headers.get("svix-signature") ?? "",
    "svix-timestamp": req.headers.get("svix-timestamp") ?? "",
  }

  const wh = new Webhook(webhookSecret)
  let event: UserWebhookEvent | null = null
  try {
    event = wh.verify(JSON.stringify(payload), svixHeaders) as UserWebhookEvent
  } catch (err) {
    console.log((err as Error).message)
    return NextResponse.json(
      { error: "Invalid webhook signature" },
      { status: 401 }
    )
  }

  if (event.type === "user.created") await createUser(event.data)
  else if (event.type === "user.deleted") await deleteUser(event.data)

  return NextResponse.json({ received: true })
}

export const GET = handler
export const POST = handler
export const PUT = handler
export const DELETE = handler

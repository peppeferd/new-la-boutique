import orderModel from "@/models/orderModel";
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.stripe_secret_key!);

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const trasactionId = reqBody.transactionId;
    const refund = await stripe.refunds.create({
      payment_intent: trasactionId,
    });

    // change order status to refunded

    await orderModel.findOneAndUpdate(
      { _id: reqBody.orderId },
      { paymentStatus: "refunded" }
    );

    return NextResponse.json({
      refund,
    });
  } catch (error: any) {
    return NextResponse.json(
      {
        message: error.message,
      },
      { status: 500 }
    );
  }
}

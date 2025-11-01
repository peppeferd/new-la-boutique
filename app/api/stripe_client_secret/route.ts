import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
const stripe = new Stripe(process.env.stripe_secret_key!);

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const paymentIntent = await stripe.paymentIntents.create({
      amount: reqBody.amount * 100,
      currency: "eur",
      description: "La Boutique",
    });

    return NextResponse.json({
      clientSecret: paymentIntent.client_secret,
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

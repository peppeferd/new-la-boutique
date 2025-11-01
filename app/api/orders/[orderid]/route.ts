import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/config/dbConfig";
import orderModel from "@/models/orderModel";

connectDB();

export async function GET(
  request: Request,

  { params }: { params: Promise<{ orderid: string }> }
) {
  try {
    const orderid = (await params).orderid;
    const order = await orderModel.findById(orderid);
    return NextResponse.json(order);
  } catch (error: any) {
    return NextResponse.json(
      {
        message: error.message,
      },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: Request,

  { params }: { params: Promise<{ orderid: string }> }
) {
  try {
    const orderid = (await params).orderid;
    const reqBody = await request.json();
    await orderModel.findByIdAndUpdate(orderid, reqBody);
    return NextResponse.json({
      message: "Order updated successfully",
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

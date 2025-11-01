import { NextResponse, NextRequest } from "next/server";
import { connectDB } from "@/config/dbConfig";
import orderModel from "@/models/orderModel";

connectDB();

export async function GET(request: NextRequest) {
  try {
    const filters: any = {};
    const orders = await orderModel.find(filters);
    return NextResponse.json(orders);
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}

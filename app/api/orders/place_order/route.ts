import { NextResponse, NextRequest } from "next/server";
import { connectDB } from "@/config/dbConfig";
import orderModel from "@/models/orderModel";

connectDB();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const order = new orderModel(reqBody);
    await order.save();

    // Decrease the quantity of the products ordered
    /*  for (let i = 0; i < reqBody.items.length; i++) {
      const product: any = await Product.findById(reqBody.items[i]._id)
      product.countInStock -= reqBody.items[i].quantity
      await product.save()
    } */

    return NextResponse.json({
      message: "Ordine piazzatto con successo",
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

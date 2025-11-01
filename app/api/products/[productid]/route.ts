import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/config/dbConfig";
import productModel from "@/models/productModel";

connectDB();

export async function GET(
  request: Request,

  { params }: { params: Promise<{ productid: string }> }
) {
  try {
    const productid = (await params).productid;
    const product = await productModel.findById(productid);
    return NextResponse.json(product);
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}

export async function PUT(
  request: Request,

  { params }: { params: Promise<{ productid: string }> }
) {
  try {
    const productid = (await params).productid;
    const reqBody = await request.json();
    await productModel.findByIdAndUpdate(productid, reqBody);
    return NextResponse.json({
      message: "Product updated successfully",
    });
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}

export async function DELETE(
  request: Request,

  { params }: { params: Promise<{ productid: string }> }
) {
  try {
    const productid = (await params).productid;
    await productModel.findByIdAndDelete(productid);
    return NextResponse.json({
      message: "Product deleted successfully",
    });
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}

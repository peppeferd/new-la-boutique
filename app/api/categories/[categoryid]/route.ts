import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/config/dbConfig";
import categoryModel from "@/models/categoryModel";

connectDB();

export async function PUT(
  request: Request,

  { params }: { params: Promise<{ categoryid: string }> }
) {
  try {
    const reqBody = await request.json();
    const categoryid = (await params).categoryid;
    await categoryModel.findByIdAndUpdate(categoryid, reqBody);
    return NextResponse.json({
      message: "Category updated successfully",
    });
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ categoryid: string }> }
) {
  try {
    const categoryid = (await params).categoryid;
    await categoryModel.findByIdAndDelete(categoryid);
    return NextResponse.json({
      message: "Category deleted successfully",
    });
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
export async function GET(
  request: Request,

  { params }: { params: Promise<{ categoryid: string }> }
) {
  try {
    const categoryid = (await params).categoryid;
    const data = await categoryModel.findById(categoryid);
    return NextResponse.json(data);
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}

import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/config/dbConfig";
import categoryModel from "@/models/categoryModel";

connectDB();

export async function POST(request: NextRequest) {
  try {
    // check if category already exists
    const reqBody = await request.json();
    const categoryExists = await categoryModel.findOne({
      name: reqBody.name,
    });
    if (categoryExists) {
      throw new Error("Category already exists");
    }

    const category = new categoryModel(reqBody);
    await category.save();

    return NextResponse.json({
      message: "Category created successfully",
    });
  } catch (error: any) {
    return NextResponse.json(
      { message: error.message },
      {
        status: 500,
      }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const categories = await categoryModel
      .find()
      .populate("name")
      .sort({ createdAt: -1 });
    return NextResponse.json({
      data: categories,
    });
  } catch (error: any) {
    return NextResponse.json(
      { message: error.message },
      {
        status: 500,
      }
    );
  }
}

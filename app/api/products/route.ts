import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/config/dbConfig";
import productModel from "@/models/productModel";

connectDB();

export async function POST(request: NextRequest) {
  try {
    // check if product already exists
    const reqBody = await request.json();
    const productExists = await productModel.findOne({
      name: reqBody.name,
    });
    if (productExists) {
      throw new Error("Product already exists");
    }

    const product = new productModel(reqBody);
    await product.save();

    return NextResponse.json({
      message: "Product created successfully",
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
    const filters: any = {};
    const searchParams = request.nextUrl.searchParams;
    const category = searchParams.get("category");
    const search = searchParams.get("search");

    if (category) {
      filters["category"] = category;
    }

    if (search) {
      filters["name"] = { $regex: search, $options: "i" };
    }

    const products = await productModel
      .find(filters)
      .populate("name")
      .sort({ createdAt: -1 });
    return NextResponse.json({
      data: products,
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

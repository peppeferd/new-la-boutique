import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "categories",
      required: true,
    },
    sizes: {
      type: [],
      required: false,
      default: [],
    },
    TopProduct: { type: String, required: false, default: false },
    NewArrival: { type: String, required: false, default: false },
    price: { type: Number, required: true },
    countInStock: { type: Number, required: true },
    images: { type: [], required: true, default: [] },
    features: { type: [], required: true, default: [] },
    rating: { type: Number, required: false, default: 0 },
  },
  { timestamps: true }
);

// delete old model if exists

if (mongoose.models && mongoose.models["products"])
  delete mongoose.models["products"];

export default mongoose.model("products", productSchema);

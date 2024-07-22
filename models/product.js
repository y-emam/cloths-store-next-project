import { Schema, model, models } from "mongoose";

const ProductSchema = new Schema({
  name: {
    type: String,
    required: [true, "Product name is required!"],
  },
  price: {
    type: Number,
    required: [true, "Prodcut priceis required!"],
  },
  desc: {
    type: String,
    required: [true, "Product description is required!"],
  },
  image: {
    type: String,
  },
});

const Product = models.Product || model("Product", ProductSchema);

export default Product;

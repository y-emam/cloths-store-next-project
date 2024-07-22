import { Schema, model, models } from "mongoose";

const OrderSchema = new Schema({
  user_id: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: [true, "User ID is required"],
  },
  products: {
    type: [
      {
        productId: { type: Schema.Types.ObjectId, ref: "Product" },
        quantity: { type: Number, required: true },
      },
    ],
    required: [true, "Products are required"],
  },
  total_price: {
    type: Number,
    required: [true, "Prodcut priceis required!"],
  },
  status: {
    type: String,
    enum: ["pending", "preparing", "delivering", "completed", "cancelled"],
    default: "pending",
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

const Order = models.Order || model("Order", OrderSchema);

export default Order;

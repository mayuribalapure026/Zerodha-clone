import mongoose from "mongoose"
import orderSchema from "../schemas/OrderSchema.js"


const OrderModel=new mongoose.model("orders",orderSchema);

export default OrderModel;
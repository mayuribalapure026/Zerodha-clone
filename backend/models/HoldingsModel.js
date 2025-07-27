import mongoose from "mongoose"
import HoldingSchema from "../schemas/HoldingSchema.js"

const HoldingsModel=new mongoose.model("holding",HoldingSchema);

export default HoldingsModel;
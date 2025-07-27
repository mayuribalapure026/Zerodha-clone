import mongoose from "mongoose";
import PositionSchema from "../schemas/PositionSchema.js";


const PositionModel=new mongoose.model("positions",PositionSchema);

export default PositionModel;

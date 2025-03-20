import mongoose, {Schema, Document} from "mongoose";

export interface ITag extends Document{
    name: string;
    spots: mongoose.Types.ObjectId[];
}

const tagSchema = new Schema({
    name:{
        type: String,
        required: true,
        unique: true,
    },
    spots:[{
        type: mongoose.Types.ObjectId,
        ref: "Spot",
        default: [],
    }],
});

export default mongoose.models.Tag || mongoose.model<ITag>("Tag", tagSchema);
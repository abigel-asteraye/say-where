import mongoose, {Schema, Document} from "mongoose";

export const TAGS = ["study", "dining", "outdoor", "events", "essentials", "gems"] as const;
export interface ITag extends Document{
    name: string;
}

const tagSchema = new Schema({
    name:{
        type: String,
        required: true,
        unique: true,
        enum: TAGS,
    }
    });

export default mongoose.models.Tag || mongoose.model<ITag>("Tag", tagSchema);
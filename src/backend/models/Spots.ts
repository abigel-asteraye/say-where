import mongoose, {Schema, Document} from "mongoose";

export interface ISpot extends Document {
    name: String,
    description: String,
    location: {
        latitude: number,
        longitude: number
    };
    type: string;
    rating: number;
    review: mongoose.Types.ObjectId[];
}

const spotSchema = new Schema({
    name:{
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    location:{
        latitude:{
            type: Number,
            required: true,
        },
        longitude:{
            type: Number,
            required: true,
        },
    },
    type:{
        type: String,
        enum: ["restaurant", "cafe", "bar", "park", "museum", "other", "trail", "grocery", "store", "library", "ponds", "lake", "mountain", "hike", "reservoir"],
        required: true,
    },
    rating:{
        type: Number,
        required: true,
        default: 0,
    },
    review:{
        type: [mongoose.Types.ObjectId],
        ref: "Review",
        default: [],
    },
})

export default mongoose.models.Spot || mongoose.model<ISpot>("Spot", spotSchema);
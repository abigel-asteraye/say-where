import mongoose, {Schema, Document} from "mongoose";

export interface IFavorite extends Document{
    user: mongoose.Types.ObjectId;
    spot: mongoose.Types.ObjectId;
}

const favoriteSchema = new Schema({
    user:{
        type: mongoose.Types.ObjectId,
        ref: "User",
        required: true,
    },
    spot:{
        type: mongoose.Types.ObjectId,
        ref: "Spot",
        required: true,
    },
})

export default mongoose.models.Favorite || mongoose.model<IFavorite>("Favorite", favoriteSchema);
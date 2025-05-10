import mongoose, { Schema, Document } from 'mongoose';
import { ITag } from './Tags';
import { TAGS } from './Tags';

export interface ISpot extends Document {
  name: string;
  description: string;
  location: {
    latitude: number;
    longitude: number;
  };
  type: string;
  rating: number;
  review: mongoose.Types.ObjectId[];
  tags: string[];
}

const spotSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  location: {
    latitude: {
      type: Number,
      required: true,
    },
    longitude: {
      type: Number,
      required: true,
    },
  },
  type: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
    default: 0,
  },
  review: {
    type: [mongoose.Types.ObjectId],
    ref: 'Review',
    default: [],
  },
  tags: {
    type: [String],
    enum: TAGS,
    required: true,
  },
});

export default mongoose.models.Spot ||
  mongoose.model<ISpot>('Spot', spotSchema);

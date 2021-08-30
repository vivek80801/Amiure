import mongoose from "mongoose";

interface IBlog extends mongoose.Document {
  title: string;
}

const BlogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
});

export const BlogModal = mongoose.model<IBlog>("blog", BlogSchema);

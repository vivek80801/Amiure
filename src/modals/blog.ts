import mongoose from "mongoose";

interface IBlog extends mongoose.Document {
  title: string;
}

const BlogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  discreaption: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "UserModal",
  },
});

export const BlogModal = mongoose.model<IBlog>("blog", BlogSchema);

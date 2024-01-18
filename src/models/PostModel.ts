import mongoose, { Schema, Document, Types } from 'mongoose';

interface Post extends Document {
  title: string;
  content: string;
  userId: Types.ObjectId;
  published: Date;
  updated: Date;
}

const postSchema: Schema<Post> = new Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  published: {
    type: Date,
    required: true,
  },
  updated: {
    type: Date,
    required: true,
  },
});

const PostModel = mongoose.model<Post>('Post', postSchema);

export default PostModel;

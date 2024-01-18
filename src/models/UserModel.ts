import mongoose, { Schema, Document } from 'mongoose';

interface User extends Document {
  id: string;
  displayName: string;
  email: string;
  password: string;
  image?: string;
}

const userSchema: Schema<User> = new Schema({
  id: Schema.Types.ObjectId,
  displayName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  image: String,
});

const UserModel = mongoose.model<User>('User', userSchema);

export default UserModel;

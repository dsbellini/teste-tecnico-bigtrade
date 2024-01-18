import { InterfaceUser } from '../Interfaces/Users';
import UserModel from '../models/UserModel';
import { Types } from 'mongoose';

export default class UserService {
  private userModel: typeof UserModel;

    constructor() {
        this.userModel = UserModel;
    }
    async create(user: InterfaceUser) {
        const newUser = new this.userModel(user);
        await newUser.save();
        return newUser;
    }

    async findOne(id: string) {
        if (!Types.ObjectId.isValid(id)) {
            throw new Error('Invalid user ID');
          }

        const user = await this.userModel.findById(id);
        if (!user) {
            throw new Error('User not found');
        }
        return user;
    }
    async update(id: string, user: InterfaceUser) {
        return this.userModel.findByIdAndUpdate(id, user, { new: true });
    }
    async delete(id: string) {
        await this.userModel.findByIdAndDelete(id);
    }
}
import { Types } from 'mongoose';
import { InterfacePost } from '../Interfaces/Post';
import PostModel from '../models/PostModel';



export default class PostService {
  private postModel: typeof PostModel;

  constructor() {
    this.postModel = PostModel;
  }

  async create(post: InterfacePost) {
    try {
      if (!Types.ObjectId.isValid(post.userId)) {
        throw new Error('Invalid userId');
      }
  
      const newPost = new this.postModel({
        title: post.title,
        content: post.content,
        userId: new Types.ObjectId(post.userId),
        published: new Date(),
        updated: new Date(),
      });
  
      await newPost.save();
  
      return newPost;
    } catch (error) {
      console.error('Erro ao criar post:', error);
      throw error;
    }
  }
  
  async findAll() {
    return this.postModel.find();
  }

  async findOne(id: number) {
    if (!Types.ObjectId.isValid(id)) {
      throw new Error('Invalid post ID');
    }

    const post = await this.postModel.findById(id);
    if (!post) {
      throw new Error('Post not found');
    }
    return post;
  }

  async update(id: number, post: InterfacePost) {
    try {
      if (!Types.ObjectId.isValid(post.userId)) {
        throw new Error('Invalid userId');
      }
  
      const updatedPost = await this.postModel.findByIdAndUpdate(id, post, { new: true });
  
      if (!updatedPost) {
        throw new Error('Post not found');
      }
  
      return updatedPost;
    } catch (error) {
      throw error;
    }
  }

  async delete(id: string) {
    await this.postModel.findByIdAndDelete(id);
  }
}
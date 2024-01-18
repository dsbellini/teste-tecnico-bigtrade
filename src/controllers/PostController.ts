import PostService from '../services/PostService';
import { Request, Response } from 'express';

export default class PostController {
    constructor(
      private postService = new PostService(),
    ) {}

    public async create(req: Request, res: Response) {
        try {
            const newPost = await this.postService.create(req.body);
            return res.status(201).json(newPost);
        } catch (err) {
            return res.status(400).json(err);
        }
    }

    public async findAll(req: Request, res: Response) {
        try {
            const posts = await this.postService.findAll();
            return res.status(200).json(posts);
        } catch (error) {
            return res.status(400).json(error);
        }
    }

    public async findOne(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const post = await this.postService.findOne(Number(id));
            return res.status(200).json(post);
        } catch (error) {
            return res.status(400).json(error);
        }
    }

    public async update(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const post = await this.postService.update(Number(id), req.body);
            return res.status(200).json(post);
        } catch (error) {
            return res.status(400).json(error);
        }
    }

    public async delete(req: Request, res: Response) {
        try {
            const { id } = req.params;
            await this.postService.delete(id);
            return res.status(200).json({ message: 'Post deleted successfully' });
        } catch (error) {
            return res.status(400).json(error);
        }
    }
}
import UserService from '../services/UserService';
import { Request, Response } from 'express';

export default class UserController {
    constructor(
      private userService = new UserService(), 
    ) {}

    public async create(req: Request, res: Response) {
        try {
            const newUser = await this.userService.create(req.body);
            return res.status(201).json(newUser);
        } catch (err) {
            return res.status(400).json(err);
        }
    }

    public async findOne(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const user = await this.userService.findOne(id);
            return res.status(200).json(user);
        } catch (error) {
            return res.status(400).json(error);
        }
    }

    public async update(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const user = await this.userService.update(id, req.body);
            return res.status(200).json(user);
        } catch (error) {
            return res.status(400).json(error);
        }
    }

    public async delete(req: Request, res: Response) {
        try {
            const { id } = req.params;
            await this.userService.delete(id);
            return res.status(200).json({ message: 'User deleted successfully' });
        } catch (error) {
            return res.status(400).json(error);
        }
    }
}
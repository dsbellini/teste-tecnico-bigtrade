import { Request, Router, Response } from 'express';
import PostController from '../controllers/PostController';
const post = new PostController();

const router = Router();

router.post('/', (req: Request, res: Response) => post.create(req, res));
router.get('/', (req: Request, res: Response) => post.findAll(req, res));
router.get('/:id', (req: Request, res: Response) => post.findOne(req, res));
router.put('/:id', (req: Request, res: Response) => post.update(req, res));
router.delete('/:id', (req: Request, res: Response) => post.delete(req, res));

export default router;

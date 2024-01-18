import { Request, Router, Response } from 'express';
import UserController from '../controllers/UserController';
const user = new UserController();

const router = Router();

router.post('/', (req: Request, res: Response) => user.create(req, res));
router.get('/:id', (req: Request, res: Response) => user.findOne(req, res));
router.put('/:id', (req: Request, res: Response) => user.update(req, res));
router.delete('/:id', (req: Request, res: Response) => user.delete(req, res));

export default router;

import { Router } from 'express';
import * as UserController from '../controllers/user.controller';
const router = new Router();

// Get user route
router.route('/user/:username').get(UserController.getUser);

export default router;

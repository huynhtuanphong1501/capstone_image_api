import express from 'express';
import { userController } from '../controllers/user.controller.js';
import { authCookie } from '../common/middleware/authCookie.middleware.js';
const userRouter = express.Router();

// Tạo route CRUD
userRouter.put('/',authCookie, userController.update);


export default userRouter;
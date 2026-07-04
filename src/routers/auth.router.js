import express from 'express';
import { authController } from '../controllers/auth.controller.js';
const authRouter = express.Router();

// Tạo route CRUD
authRouter.post('/login', authController.login);
authRouter.post('/register', authController.register);


export default authRouter;
import express from 'express';
import { imgManageController } from '../controllers/img-manage-page.controller.js';
import { authCookie } from '../common/middleware/authCookie.middleware.js';
const imgManageRouter = express.Router();

// Tạo route CRUD
imgManageRouter.get('/', authCookie, imgManageController.getInfo);
imgManageRouter.get('/saved/:id', authCookie, imgManageController.getSavedImgById);
imgManageRouter.get('/created/:id', authCookie, imgManageController.getCreateImgById);
imgManageRouter.delete('/images/:id', authCookie, imgManageController.deleteImgByImgId);

export default imgManageRouter;
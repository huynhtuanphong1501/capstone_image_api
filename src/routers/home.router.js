import express from 'express';
import { homeController } from '../controllers/home.controller.js';
import { authCookie } from '../common/middleware/authCookie.middleware.js';
import { uploadMemoryStorage } from '../common/multer/memory-storage.multer.js';

const homeRouter = express.Router();

homeRouter.post('/themAnh', authCookie,
    uploadMemoryStorage.single("image"), homeController.themAnh);

homeRouter.get("/", authCookie, homeController.findAll);

homeRouter.get("/:ten_hinh", authCookie, homeController.findByName);

export default homeRouter;
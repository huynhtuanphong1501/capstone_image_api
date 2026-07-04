import express from 'express';
import { addImgController } from '../controllers/add-img-page.controller.js';
import { authCookie } from '../common/middleware/authCookie.middleware.js';
import { uploadMemoryStorage } from '../common/multer/memory-storage.multer.js';

const addImgRouter = express.Router();


addImgRouter.post('/themAnh', authCookie,
    uploadMemoryStorage.single("image"), addImgController.themAnh);

export default addImgRouter;
import express from 'express';
import { detailController } from '../controllers/detail-page.controller.js';
import { authCookie } from '../common/middleware/authCookie.middleware.js';

const detailRouter = express.Router();

// Tạo route CRUD
detailRouter.get("/:id",authCookie, detailController.getDetailById);
detailRouter.get("/comments/:hinh_id", authCookie, detailController.getCommentByImageId);
detailRouter.get("/checkSaved/:hinh_id", authCookie, detailController.checkSaved);
detailRouter.post("/comments/:hinh_id", authCookie, detailController.createComment);

export default detailRouter;
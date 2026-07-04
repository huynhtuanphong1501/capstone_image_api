import express from "express";
import authRouter from "./auth.router.js";
import homeRouter from "./home.router.js";
import detailRouter from "./detail-page.router.js";
import imgManageRouter from "./img-manage-page.router.js";
import addImgRouter from "./add-img-page.router.js";
import userRouter from "./user.router.js";

const rootRouter = express.Router();

rootRouter.use("/auth", authRouter);
rootRouter.use("/home", homeRouter);
rootRouter.use("/detail", detailRouter);
rootRouter.use("/img-manage", imgManageRouter);
rootRouter.use("/add-img", addImgRouter);
rootRouter.use("/user", userRouter);

export default rootRouter;
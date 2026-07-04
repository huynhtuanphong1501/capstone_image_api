import express from "express";
import cookieParser from "cookie-parser";
import { PORT } from "./src/common/constant/app.constant.js";
import rootRouter from "./src/routers/root.router.js";
import { appErrorHelper } from "./src/common/helpers/appError.helper.js";
import { logAPI } from "./src/common/middleware/log-api.middleware.js";


const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(logAPI)
app.use("/api", rootRouter);
app.use(appErrorHelper);

app.listen(PORT, () => { 
    console.log(`[SERVER] SERVER IS RUNNING ON ${PORT}`);
})


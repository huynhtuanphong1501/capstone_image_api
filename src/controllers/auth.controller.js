import { authService } from "../services/auth.service.js";
import { responseSuccess } from "../common/helpers/response.helper.js";
import { NODE_ENV } from "../common/constant/app.constant.js";

const COOKIE_OPTIONS = {
    httpOnly: true,
    sameSite: "lax",
    secure: NODE_ENV === "production",
    maxAge: 7 * 24 * 60 * 60 * 1000,
}

export const authController = {
   async login(req, res, next) {
        const { accessToken, refreshToken } = await authService.login(req);
        res.cookie("refreshToken", refreshToken, COOKIE_OPTIONS);
        res.cookie("accessToken", accessToken, COOKIE_OPTIONS);
        const response = responseSuccess({accessToken}, `Login auth successfully`);
        res.status(response.statusCode).json(response);
   },

   async register(req, res, next) {
       const { accessToken, refreshToken } = await authService.register(req);
       res.cookie("refreshToken", refreshToken, COOKIE_OPTIONS);
        res.cookie("accessToken", accessToken, COOKIE_OPTIONS);
      const response = responseSuccess({accessToken}, `Register auths successfully`);
      res.status(response.statusCode).json(response);
   },
};
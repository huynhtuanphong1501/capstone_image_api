import { responseError } from "./response.helper.js";
import jwt from "jsonwebtoken";
import { statusCodes } from "./statusCode.helper.js";
export const appErrorHelper = (err, req, res, next) => {
  if (err instanceof jwt.JsonWebTokenError) {
    err.status = statusCodes.UNAUTHORIZED;
  }
  if (err instanceof jwt.TokenExpiredError) {
    err.status = statusCodes.FORBIDDEN;
  }

  const response = responseError(err?.message, err?.status, err?.stack);
  res.status(response.statusCode).json(response);
};

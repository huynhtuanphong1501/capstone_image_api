import jwt from "jsonwebtoken";
import {
  JWT_ACCESS_KEY,
  JWT_REFRESH_KEY,
} from "../constant/app.constant.js";

export const signAccessToken = (payload) => {
  return jwt.sign(payload, JWT_ACCESS_KEY, { expiresIn: "3h" });
};

export const verifyAccessToken = (token, options) => {
  return jwt.verify(token, JWT_ACCESS_KEY, options);
};

export const signRefreshToken = (payload) => {
  return jwt.sign(payload, JWT_REFRESH_KEY, { expiresIn: "7d" });
};

export const verifyRefreshToken = (token) => {
  return jwt.verify(token, JWT_REFRESH_KEY);
};

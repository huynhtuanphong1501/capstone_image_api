import "dotenv/config";

export const PORT = process.env.PORT;
export const DATABASE_URL = process.env.DATABASE_URL;
export const NODE_ENV = process.env.NODE_ENV;
export const JWT_ACCESS_KEY = process.env.JWT_SECRET_KEY;
export const JWT_REFRESH_KEY = process.env.JWT_REFRESH_SECRET;
export const CLOUDINARY_URL = process.env.CLOUDINARY_URL;

console.log({
    port: PORT,
    db: DATABASE_URL,
    env: NODE_ENV,
    ak: JWT_ACCESS_KEY,
    rk: JWT_REFRESH_KEY,
    cloud: CLOUDINARY_URL
})
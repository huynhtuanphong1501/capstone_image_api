import { UnauthorizedError } from "../helpers/exception.helper.js";
import { verifyAccessToken } from "../helpers/jwt.helper.js";
import { prisma } from "../prisma/connect.prisma.js";

export const authCookie = async (req, res, next) => { 
    const { accessToken } = req.cookies;

    if (!accessToken) { 
        throw new UnauthorizedError("AccessToken not found");
    }

    const decode = verifyAccessToken(accessToken);
    console.log({decode: decode})
    const user = await prisma.nguoi_dung.findUnique({
        where: {
            nguoi_dung_id: decode.id
        }
    })
    if (!user) {
        throw new UnauthorizedError("user not found");
    }

    req.user = user;
    next();
}

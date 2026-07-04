import { BadrequestError } from "../common/helpers/exception.helper.js";
import { prisma } from "../common/prisma/connect.prisma.js"
import bcrypt from "bcrypt";
import { signAccessToken, signRefreshToken } from "../common/helpers/jwt.helper.js";

export const authService = {
   async login(req) {
        const { email, mat_khau } = req.body;
        const user = await prisma.nguoi_dung.findUnique({
            where: {
                email: email,
            },
            omit: {
                mat_khau: false,
            }
        })

        if (!user) {
            throw new BadrequestError("user not found");
        }

        const checkMatch = bcrypt.compareSync(mat_khau, user.mat_khau);
        if (!checkMatch) {
            throw new BadrequestError("invalid password");
        }

        const payload = {
            id: user.nguoi_dung_id,
            email: user.email,
        }

        const accessToken = signAccessToken(payload);
        const refreshToken = signRefreshToken(payload);

        return { accessToken, refreshToken };
    },
    

   async register(req) {
        const { email, mat_khau, ho_ten, tuoi, anh_dai_dien } = req.body;
        const res = await prisma.nguoi_dung.findUnique({
        where: {
            email: email,
        },
        });

        const hashPassword = bcrypt.hashSync(mat_khau, 10);

        if (res) {
        throw new BadrequestError("Email already exists");
        }

        const result = await prisma.nguoi_dung.create({
        data: {
            email: email,
            mat_khau: hashPassword,
            ho_ten: ho_ten,
            ...(tuoi && { tuoi }),
            ...(anh_dai_dien && { anh_dai_dien }),
        },
        });
        return true;
   },

};
import {prisma} from "../common/prisma/connect.prisma.js"
export const userService = {
   async update(req) {
      const { ho_ten, tuoi, anh_dai_dien } = req.body;

        const updatedUser = await prisma.nguoi_dung.update({
            where: {
                nguoi_dung_id: req.user.nguoi_dung_id,
            },
            data: {
                ho_ten,
                ...(tuoi && { tuoi }),
                ...(anh_dai_dien && { anh_dai_dien }),
            },
        });

        return updatedUser;
   },
};
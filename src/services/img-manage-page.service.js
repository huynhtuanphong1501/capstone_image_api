import {prisma} from "../common/prisma/connect.prisma.js"
export const imgManageService = {
    async getInfo(req) {
        return prisma.nguoi_dung.findUnique({
            where: {
                nguoi_dung_id: Number(req.user.nguoi_dung_id),
            }
        }) ;
    },
    
    async getSavedImgById(req) {
        const { id } = req.params;
        const checkUser = await prisma.nguoi_dung.findUnique({
            where: {
                nguoi_dung_id: Number(id),
            }
        });
        if (!checkUser) {
            throw new BadrequestError("User not found");
        }

        const savedImages = await prisma.luu_anh.findMany({
            where: {
                nguoi_dung_id: Number(id),
            },
        });
        return savedImages;
    },

    async getCreateImgById(req) {
        const { id } = req.params;
        const checkUser = await prisma.nguoi_dung.findUnique({
            where: {
                nguoi_dung_id: Number(id),
            }
        });
        if (!checkUser) {
            throw new BadrequestError("User not found");
        }
        const createdImages = await prisma.hinh_anh.findMany({
            where: {
                nguoi_dung_id: Number(id),
            }
        });
        return createdImages;
    },

    async deleteImgByImgId(req) {
        const { imgId } = req.params;
        const checkImage = await prisma.hinh_anh.findUnique({
            where: {
                hinh_id: Number(imgId),
            }
        });
        if (!checkImage) {
            throw new BadrequestError("Image not found");
        }
        const deletedImage = await prisma.hinh_anh.delete({
            where: {
                hinh_id: Number(imgId),
            }
        });
        return deletedImage;
    }

};
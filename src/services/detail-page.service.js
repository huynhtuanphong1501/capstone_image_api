import { prisma } from "../common/prisma/connect.prisma.js";
import { BadrequestError } from "../common/helpers/exception.helper.js";
export const detailService = {
   async getDetailById(req) {
        const { id } = req.params;
        console.log(id);
        const result = await prisma.hinh_anh.findUnique({
            where: {
                hinh_id: Number(id),
            },
            include: {
                nguoi_dung: true,
            },
        });
        
        
      return result;
    },
    
    async getCommentByImageId(req) {
        const { hinh_id } = req.params;
        const comments = await prisma.binh_luan.findMany({
            where: {
                hinh_id: Number(hinh_id),
            },
            include: {
                nguoi_dung: {
                    select: {
                        nguoi_dung_id: true,
                        ho_ten: true,
                    },
                },
            },
        });
        if (!comments) {
            throw new BadrequestError("No comments found for this image");
        }

        return comments;
    },
    
    async checkSaved(req) {
        const { hinh_id } = req.params;
        const saved = await prisma.luu_anh.findFirst({
            where: {
                nguoi_dung_id: Number(req.user.nguoi_dung_id),
                hinh_id: Number(hinh_id),
            },
        });

        return saved ? true : false;
    },

    async createComment(req) {
        const { hinh_id } = req.params;
        const { noi_dung } = req.body;

        const image = await prisma.hinh_anh.findUnique({
            where: {
                hinh_id: Number(hinh_id),
            },
        });
        if (!image) {
            throw new BadrequestError("Image not found");
        }

        const newComment = await prisma.binh_luan.create({
            data: {
                noi_dung,
                nguoi_dung_id: Number(req.user.nguoi_dung_id),
                hinh_id: Number(hinh_id),
                ngay_binh_luan: new Date(),
            }
        });
        return newComment;
    }


};
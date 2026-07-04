import { prisma } from "../common/prisma/connect.prisma.js";
import { buildQueryPrismaHelper } from "../common/helpers/build-query.helper.js";
import path from "path";
import fs from "fs";
import { v2 as cloudinary } from "cloudinary";

export const addImgPageService = {
    async themAnh(req) {
        if (!req.file) {
            throw new BadrequestError("No file uploaded");
        }

        const { ten_hinh, mo_ta } = req.body;

        const existingImage = await prisma.hinh_anh.findMany({
            where: { ten_hinh },
        });

        if (existingImage.length > 0) {
            throw new BadrequestError("Image with this name already exists");
        }

        const uploadResult = await new Promise((resolve, reject) => {
        cloudinary.uploader
            .upload_stream({ folder: "capstone" }, (error, uploadResult) => {
            if (error) {
                return reject(error);
            }
            return resolve(uploadResult);
            })
            .end(req.file.buffer);
        });

        await prisma.hinh_anh.create({
            data: {
                ten_hinh,
                duong_dan: uploadResult.secure_url,
                mo_ta,
                nguoi_dung_id: req.user.nguoi_dung_id,
            },
        });
        return `This action uploads a cloud image`;
    },
}
import { prisma } from "../common/prisma/connect.prisma.js";
import { buildQueryPrismaHelper } from "../common/helpers/build-query.helper.js";

export const homeService = {

    async findAll(req) {
        const { page, pageSize, index, filters, where } = buildQueryPrismaHelper(req);
        const results = await prisma.hinh_anh.findMany({
            where: where,
            skip: index, 
            take: pageSize,
        });
        const totalItems = await prisma.hinh_anh.count({
            where: where,
        });
        const totalPages = Math.ceil(totalItems / pageSize);
        return {
            items: results,
            totalItems: totalItems,
            totalPages: totalPages,
            page: page,
            pageSize: pageSize,
        };
    },

     async findByName(req) {
        const { ten_hinh } = req.params;
        const results = await prisma.hinh_anh.findMany({
            where: {
                ten_hinh: {
                    contains: ten_hinh,
                },
                isDelete: false,
            },
        });
        return results;
    },
};
import { imgManageService } from "../services/img-manage-page.service.js";
import { responseSuccess } from "../common/helpers/response.helper.js";
export const imgManageController = {
   async getInfo(req, res, next) {
      const result = await imgManageService.getInfo(req);
      const response = responseSuccess(result, `Get user information successfully`);
      res.status(response.statusCode).json(response);
   },

    async getSavedImgById(req, res, next) {
      const result = await imgManageService.getSavedImgById(req);
      const response = responseSuccess(result, `Get saved image information successfully`);
      res.status(response.statusCode).json(response);
    },
    
    async getCreateImgById(req, res, next) {
      const result = await imgManageService.getCreateImgById(req);
      const response = responseSuccess(result, `Get created image information successfully`);
      res.status(response.statusCode).json(response);
   },

    async deleteImgByImgId(req, res, next) {
      const result = await imgManageService.deleteImgByImgId(req);
      const response = responseSuccess(result, `Delete image successfully`);
      res.status(response.statusCode).json(response);
   }
};
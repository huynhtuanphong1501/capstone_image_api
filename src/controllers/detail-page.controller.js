import { detailService } from "../services/detail-page.service.js";
import { responseSuccess } from "../common/helpers/response.helper.js";
export const detailController = {
   async getDetailById(req, res, next) {
      const result = await detailService.getDetailById(req);
      const response = responseSuccess(result, `Get detail #${req.params.id} successfully`);
      res.status(response.statusCode).json(response);
    },
    
    async getCommentByImageId(req, res, next) {
      const result = await detailService.getCommentByImageId(req);
      const response = responseSuccess(result, `Get comments for image #${req.params.hinh_id} successfully`);
      res.status(response.statusCode).json(response);
    },
    
    async checkSaved(req, res, next) {
      const result = await detailService.checkSaved(req);
      const response = responseSuccess(result, `Check saved status for image #${req.params.hinh_id} successfully`);
      res.status(response.statusCode).json(response);
   },

    async createComment(req, res, next) {
      const result = await detailService.createComment(req);
      const response = responseSuccess(result, `Create comment for image #${req.params.hinh_id} successfully`);
      res.status(response.statusCode).json(response);
    }
};
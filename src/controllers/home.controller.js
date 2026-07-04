import { homeService } from "../services/home.service.js";
import { responseSuccess } from "../common/helpers/response.helper.js";
export const homeController = {

   async themAnh(req, res, next) {
      const result = await homeService.themAnh(req);
      const response = responseSuccess(result, `create img successfully`);
      res.status(response.statusCode).json(response);
   },

   async findAll(req, res, next) {
      const result = await homeService.findAll(req);
      const response = responseSuccess(result, `Get all home items successfully`);
      res.status(response.statusCode).json(response);
   },

   async findByName(req, res, next) {
      const result = await homeService.findByName(req);
      const response = responseSuccess(result, `Get home item by name successfully`);
      res.status(response.statusCode).json(response);
   },

};
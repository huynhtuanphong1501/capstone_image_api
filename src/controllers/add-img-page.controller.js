import { responseSuccess } from "../common/helpers/response.helper.js";
import { addImgPageService } from "../services/add-img-page.service.js";
export const addImgController = {
      async themAnh(req, res, next) {
          const result = await addImgPageService.themAnh(req);
          const response = responseSuccess(result, `create img successfully`);
          res.status(response.statusCode).json(response);
       },
};
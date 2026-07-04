import { userService } from "../services/user.service.js";
import { responseSuccess } from "../common/helpers/response.helper.js";
export const userController = {
   async update(req, res, next) {
      const result = await userService.update(req);
      const response = responseSuccess(result, `Update user #${req.params.id} successfully`);
      res.status(response.statusCode).json(response);
   },
};
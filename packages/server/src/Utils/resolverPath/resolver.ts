import { queryResolver } from "../../modules/temp/resolvers";
import { loginResolver } from "../../modules/login/resolvers";
import { registerResolver } from "../../modules/register/resolvers";
import { confirmUser } from "../../modules/confirmUser/resolvers";
import { forgotPassword } from "../../modules/forgotPassword/resolvers";
import { changePassword } from "../../modules/changePassword/resolvers";
import { fileUpload } from "../../modules/uploadS3/resolvers";
import { createService } from "../../modules/createService/resolvers";
import { createMessage } from "../../modules/messages/resolver";

export const resolvers = [
  queryResolver,
  loginResolver,
  registerResolver,
  confirmUser,
  forgotPassword,
  changePassword,
  fileUpload,
  createService,
  createMessage,
];

import { loginResolver } from "../../modules/Auth/login/resolvers";
import { registerResolver } from "../../modules/Auth/register/resolvers";
import { confirmUser } from "../../modules/search/confirmUser/resolvers";
import { forgotPassword } from "../../modules/forgotPassword/resolvers";
import { changePassword } from "../../modules/changePassword/resolvers";
import { fileUpload } from "../../modules/uploadS3/resolvers";
import { createService } from "../../modules/createService/resolvers";
import { createMessage } from "../../modules/messages/resolver";
import { findMessage } from "../../modules/findMessage/resolvers";
import { newMessage } from "../../modules/newMessage/resolvers";
import { searchServicesUser } from "../../modules/search/resolvers";

export const resolvers = [
  loginResolver,
  registerResolver,
  confirmUser,
  forgotPassword,
  changePassword,
  fileUpload,
  createService,
  createMessage,
  findMessage,
  newMessage,
  searchServicesUser,
];

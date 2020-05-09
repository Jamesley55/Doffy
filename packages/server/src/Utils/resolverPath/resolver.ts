import { changePassword } from "./../../modules/Password/changePassword/resolvers";
import { loginResolver } from "../../modules/Auth/login/resolvers";
import { registerResolver } from "../../modules/Auth/register/resolvers";
import { confirmUser } from "../../modules/search/confirmUser/resolvers";
import { forgotPassword } from "../../modules/Password/forgotPassword/resolvers";
import { fileUpload } from "../../modules/Pictures/uploadS3/resolvers";
import { createService } from "../../modules/Services/create/resolvers";
import { createMessage } from "../../modules/Message/pubSub/resolver";
import { newMessage } from "../../modules/Message/newMessage/resolvers";
import { searchServicesUser } from "../../modules/search/resolvers";
import { findMessage } from "../../modules/Message/findMessage/resolvers";

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

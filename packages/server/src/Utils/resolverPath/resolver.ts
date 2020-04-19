import { queryResolver } from "../../modules/temp/resolvers";
import { loginResolver } from "../../modules/login/resolvers";
import { registerResolver } from "../../modules/register/resolvers";
import { confirmUser } from "../../modules/confirmUser/resolvers";
import { forgotPassword } from "../../modules/forgotPassword/resolvers";

export const resolvers = [
  queryResolver,
  loginResolver,
  registerResolver,
  confirmUser,
  forgotPassword,
];

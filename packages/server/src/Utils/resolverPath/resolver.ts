import { queryResolver } from "../../modules/temp/resolvers";
import { loginResolver } from "../../modules/login/resolvers";
import { registerResolver } from "../../modules/register/resolvers";

export const resolvers = [queryResolver, loginResolver, registerResolver];

import { IResolvers } from "apollo-server-express";
import * as bcrypt from "bcryptjs";
import { User } from "../../../entity/User";
import { MutationLoginArgs } from "../../../types/graphql-hooks";
import { userSessionIdPrefix } from "../../shared/constant";
import { invalidLogin } from "./errorMessages";

// Iresolver is there to add types to the
// ts project

export const loginResolver: IResolvers = {
	Mutation: {
		login: async (
			_,
			{ email, password }: MutationLoginArgs,
			{ req, session, redis }
		) => {
			const user = await User.findOne({ where: { email } });
			console.log("arriver", user);
			if (!user) {
				return {
					errors: [
						{
							path: "user",
							message: "no user with that email exit",
						},
					],
				};
			}
			const valid = await bcrypt.compare(password, user.password);

			if (!valid) {
				return {
					errors: [
						{
							path: "password",
							message: invalidLogin,
						},
					],
				};
			}
			// if (!user.confirm) {
			// 	return {
			// 		errors: [
			// 			{
			// 				path: "email",
			// 				message: confirmEmailError,
			// 			},
			// 		],
			// 	};
			// }
			session.userId = user.id;

			if (req.sessionID) {
				await redis.lpush(`${userSessionIdPrefix}${user.id}`, req.sessionID);
			}
			return { sessionId: req.sessionID };
		},
	},
};

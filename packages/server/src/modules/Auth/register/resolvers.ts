import { RegisterValidationSchema } from "@doffy/common";
import { IResolvers } from "apollo-server-express";
import * as bcrypt from "bcryptjs";
import { User } from "../../../entity/User";
import { MutationRegisterArgs } from "../../../types/graphql-hooks";
import { duplicateEmail } from "../../../Utils/FormatYupError/ErrorMessage";
import { formatYupError } from "../../../Utils/FormatYupError/formatYupError";
import { host } from "../../../Utils/host/host";
import { userSessionIdPrefix } from "../../shared/constant";
import { createConfirmEmailLink } from "../CreateConfirmEmail/createconfirmEmailLink";
import { sendEmail } from "../CreateConfirmEmail/sendMail";

// Iresolver is there to add types to the
// ts project
export const registerResolver: IResolvers = {
	Mutation: {
		register: async (
			_,
			args: MutationRegisterArgs,
			{ req, redis, session }
		) => {
			try {
				await RegisterValidationSchema.validate(args, { abortEarly: false });
			} catch (err) {
				return formatYupError(err);
			}
			const { username, email, password, confirmPassword } = args;
			const userAlreadyExist = await User.findOne({
				where: { email },
				select: ["id"],
			});
			if (userAlreadyExist) {
				return {
					errors: [
						{
							path: "email",
							message: duplicateEmail,
						},
					],
				};
			}

			if (password !== confirmPassword) {
				return {
					errors: [
						{
							path: "password",
							message: "your password doesnt correspond",
						},
					],
				};
			}
			const hashedPassword = await bcrypt.hash(password, 10);
			const user = await User.create({
				username,
				email,
				password: hashedPassword,
			}).save();

			await sendEmail(
				email,
				await createConfirmEmailLink(host, user.id, redis)
			);

			session.userId = user.id;

			if (req.sessionID) {
				await redis.lpush(`${userSessionIdPrefix}${user.id}`, req.sessionID);
			}
			return { sessionId: req.sessionID };
		},
	},
};

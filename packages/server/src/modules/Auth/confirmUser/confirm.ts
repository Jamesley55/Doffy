import { User } from "../../../entity/User";
import { redis } from "../../../redis";
import { app } from "../../../StartServer";
import { confirmationPrefix } from "../../../Utils/constant/redisPrefix";

export const ConfirmEmail = () => {
	app.get("/graphql/confirm/:token", async (req, res) => {
		// token to confirm  the user
		const token = req.params.token;
		// look for the token inside of redis
		const userId = await redis.get(confirmationPrefix + token);
		// if we don't find user we return false
		if (!userId) {
			return false;
		}
		// update the confirmation state of the user
		await User.update({ id: userId }, { confirm: true });

		// delete the token inside of redis
		await redis.del(confirmationPrefix + token);

		// redisrect to the login page
		return res.redirect("http://doffyinc.com");
	});
};

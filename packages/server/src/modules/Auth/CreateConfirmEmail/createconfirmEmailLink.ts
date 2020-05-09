import { v4 } from "uuid";
import { confirmationPrefix } from "../../../Utils/constant/redisPrefix";
import { Redis } from "ioredis";
// http://localhost:4000
// https://my-site.com
// => http://my-site.com/confirm<id>
export const createConfirmEmailLink = async (
  url: string,
  userId: string,
  redis: Redis
) => {
  const token = v4();
  console.log("v4 token", token);
  await redis.set(confirmationPrefix + token, userId, "ex", 60 * 60 * 24); // 1 day expiration
  return `${url}/confirm/${token}`;
};

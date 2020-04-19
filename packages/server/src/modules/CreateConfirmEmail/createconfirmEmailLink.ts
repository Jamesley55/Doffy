import { v4 } from "uuid";
import { confirmationPrefix } from "../../Utils/constant/redisPrefix";
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
  const setter = await redis.set(
    confirmationPrefix + token,
    userId,
    "ex",
    60 * 60 * 24
  ); // 1 day expiration
  console.log("setter", setter);
  const token1 = await redis.get(token);
  console.log("redis token", token1);
  return `${url}/confirm/${token}`;
};

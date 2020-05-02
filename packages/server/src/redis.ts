import * as Redis from "ioredis";

export const redis =
  process.env.NODE_ENV === "production"
    ? new Redis({
        host: process.env.REDIS_URL,
        port: 6379,
      })
    : new Redis();

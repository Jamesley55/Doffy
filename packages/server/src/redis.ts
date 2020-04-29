import * as Redis from "ioredis";

export const redis =
  process.env.NODE_EN === "production"
    ? new Redis({
        port: 6379,
        host: "redis",
        // process.env.Redis_URL,
      })
    : new Redis({
        port: 6379,
        host: "127.0.0.1",
      });

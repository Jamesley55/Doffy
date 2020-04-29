import * as Redis from "ioredis";

export const redis =
  process.env.NODE_ENV === "production"
    ? new Redis({
        port: 6379,
        host: process.env.Redis_URL,
        tls: {},
      })
    : new Redis({
        port: 6379,
        host: "127.0.0.1",
      });

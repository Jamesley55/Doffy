"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Redis = require("ioredis");
exports.redis = process.env.NODE_ENV === "production"
    ? new Redis({
        port: 6379,
        host: process.env.Redis_URL,
        tls: {},
    })
    : new Redis({
        port: 6379,
        host: "127.0.0.1",
    });
//# sourceMappingURL=redis.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Redis = require("ioredis");
exports.redis = process.env.NODE_ENV === "production"
    ? new Redis({
        host: process.env.REDIS_URL,
        port: 6379,
    })
    : new Redis();
//# sourceMappingURL=redis.js.map
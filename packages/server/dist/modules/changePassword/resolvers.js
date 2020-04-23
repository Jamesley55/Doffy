"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const redisPrefix_1 = require("./../../Utils/constant/redisPrefix");
const User_1 = require("../../entity/User");
const redis_1 = require("../../redis");
const bcrypt = require("bcryptjs");
const resolvers_1 = require("../forgotPassword/resolvers");
exports.changePassword = {
    Mutation: {
        changePassword: (_, { token, password }) => __awaiter(void 0, void 0, void 0, function* () {
            const userId = yield redis_1.redis.get(redisPrefix_1.forgetPasswordPrefix + token);
            if (!userId) {
                return null;
            }
            const user = yield User_1.User.findOne(userId);
            if (!user) {
                return null;
            }
            user.password = yield bcrypt.hash(password, 10);
            yield redis_1.redis.del(resolvers_1.forgotPassword + token);
            user.save();
            return user;
        }),
    },
};
//# sourceMappingURL=resolvers.js.map
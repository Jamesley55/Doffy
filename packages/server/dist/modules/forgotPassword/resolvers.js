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
const sendMail_1 = require("../CreateConfirmEmail/sendMail");
const User_1 = require("../../entity/User");
const uuid_1 = require("uuid");
const redis_1 = require("../../redis");
const redisPrefix_1 = require("../../Utils/constant/redisPrefix");
exports.forgotPassword = {
    Mutation: {
        forgotPassword: (_, { email }) => __awaiter(void 0, void 0, void 0, function* () {
            const user = yield User_1.User.findOne({ where: { email } });
            if (!user) {
                return false;
            }
            const token = uuid_1.v4();
            yield redis_1.redis.set(redisPrefix_1.forgetPasswordPrefix + token, user.id, "ex", 60 * 60 * 24);
            const htt = `http://localhost:1000/user/change-password/${token}`;
            yield sendMail_1.sendEmail(email, htt);
            return true;
        }),
    },
};
//# sourceMappingURL=resolvers.js.map
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
const User_1 = require("../../../entity/User");
const redis_1 = require("../../../redis");
const redisPrefix_1 = require("../../../Utils/constant/redisPrefix");
const generate_1 = require("./generate");
const sendPasswordMail_1 = require("../SendPasswordEmail/sendPasswordMail");
exports.forgotPassword = {
    Mutation: {
        forgotPassword: (_, { email }) => __awaiter(void 0, void 0, void 0, function* () {
            const user = yield User_1.User.findOne({ where: { email } });
            if (!user) {
                return false;
            }
            const token = generate_1.generate(9);
            console.log(token);
            yield redis_1.redis.hmset(redisPrefix_1.forgetPasswordPrefix + token, user.id, "ex", 60 * 60 * 24);
            yield sendPasswordMail_1.sendPasswordEmail(email, token);
            return true;
        }),
    },
};
//# sourceMappingURL=resolvers.js.map
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
const errorMessages_1 = require("./errorMessages");
const bcrypt = require("bcryptjs");
const User_1 = require("../../../entity/User");
const constant_1 = require("../../shared/constant");
exports.loginResolver = {
    Mutation: {
        login: (_, { email, password }, { req, session, redis }) => __awaiter(void 0, void 0, void 0, function* () {
            const user = yield User_1.User.findOne({ where: { email } });
            if (!user) {
                return null;
            }
            const valid = yield bcrypt.compare(password, user.password);
            if (!valid) {
                return [
                    {
                        path: "email",
                        message: errorMessages_1.invalidLogin,
                    },
                ];
            }
            if (!user.confirm) {
                return [
                    {
                        path: "email",
                        message: errorMessages_1.confirmEmailError,
                    },
                ];
            }
            session.userId = user.id;
            console.log("session Userid", session.userId);
            if (req.sessionID) {
                yield redis.lpush(`${constant_1.userSessionIdPrefix}${user.id}`, req.sessionID);
            }
            console.log("sessionId", req.sessionID);
            return [{ sessionId: req.sessionID }];
        }),
    },
};
//# sourceMappingURL=resolvers.js.map
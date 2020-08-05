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
exports.loginResolver = void 0;
const bcrypt = require("bcryptjs");
const User_1 = require("../../../entity/User");
const constant_1 = require("../../shared/constant");
const errorMessages_1 = require("./errorMessages");
exports.loginResolver = {
    Mutation: {
        login: (_, { email, password }, { req, session, redis }) => __awaiter(void 0, void 0, void 0, function* () {
            const user = yield User_1.User.findOne({ where: { email } });
            console.log("arriver", user);
            if (!user) {
                return {
                    errors: [
                        {
                            path: "user",
                            message: "no user with that email exit",
                        },
                    ],
                };
            }
            const valid = yield bcrypt.compare(password, user.password);
            if (!valid) {
                return {
                    errors: [
                        {
                            path: "password",
                            message: errorMessages_1.invalidLogin,
                        },
                    ],
                };
            }
            session.userId = user.id;
            if (req.sessionID) {
                yield redis.lpush(`${constant_1.userSessionIdPrefix}${user.id}`, req.sessionID);
            }
            return { sessionId: req.sessionID };
        }),
    },
};
//# sourceMappingURL=resolvers.js.map
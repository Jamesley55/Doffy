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
const bcrypt = require("bcryptjs");
const User_1 = require("../../entity/User");
exports.loginResolver = {
    Mutation: {
        login: (_, { email, password }, { req }) => __awaiter(void 0, void 0, void 0, function* () {
            const user = yield User_1.User.findOne({ where: { email } });
            if (!user) {
                return {
                    errors: [
                        {
                            path: "email",
                            message: "user not found",
                        },
                    ],
                };
            }
            const valid = yield bcrypt.compare(password, user.password);
            if (!valid) {
                return {
                    errors: [
                        {
                            path: "email",
                            message: "is not valid",
                        },
                    ],
                };
            }
            req.session.userId = user.id;
            if (!user.confirm) {
                return {
                    errors: [
                        {
                            path: "email",
                            message: "is not confirm",
                        },
                    ],
                };
            }
            return { user };
        }),
    },
};
//# sourceMappingURL=resolvers.js.map
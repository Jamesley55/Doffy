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
exports.Logout = void 0;
const removeUserSession_1 = require("./removeUserSession");
exports.Logout = {
    Mutation: {
        logout: (_, __, { session, redis, res }) => __awaiter(void 0, void 0, void 0, function* () {
            const { userId } = session;
            if (userId) {
                removeUserSession_1.removeAllUsersSessions(userId, redis);
                session.destroy((err) => {
                    if (err) {
                        console.log(err);
                    }
                });
                res.clearCookie("qid");
                return true;
            }
            return false;
        }),
    },
};
//# sourceMappingURL=resolvers.js.map
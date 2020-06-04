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
const service_1 = require("../../../entity/service");
exports.Me = {
    Query: {
        me: (_, __, { session }) => __awaiter(void 0, void 0, void 0, function* () {
            const user = yield User_1.User.findOne({ where: { id: session.userId } });
            const userId = user === null || user === void 0 ? void 0 : user.id;
            let service;
            service =
                (user === null || user === void 0 ? void 0 : user.userType) === "serviceProvider"
                    ? yield service_1.Service.find({ where: { ownerId: userId } })
                    : null;
            const userService = {
                user,
                service,
            };
            return userService;
        }),
    },
};
//# sourceMappingURL=resolvers.js.map
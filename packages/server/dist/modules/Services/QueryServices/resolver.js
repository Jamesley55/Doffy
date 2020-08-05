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
exports.ServiceByCategory = void 0;
const service_1 = require("../../../entity/service");
const User_1 = require("../../../entity/User");
exports.ServiceByCategory = {
    Query: {
        ServiceUser: (_, { ServiceId }) => __awaiter(void 0, void 0, void 0, function* () {
            const service = yield service_1.Service.findOne({ where: { id: ServiceId } });
            const id = service === null || service === void 0 ? void 0 : service.ownerId;
            const user = User_1.User.findOne({ where: { id } });
            return user;
        }),
        ServiceByCategory: (_, { category }) => __awaiter(void 0, void 0, void 0, function* () {
            const service = yield service_1.Service.find({ where: { category } });
            return service;
        }),
    },
};
//# sourceMappingURL=resolver.js.map
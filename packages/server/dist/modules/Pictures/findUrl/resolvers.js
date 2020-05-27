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
const service_1 = require("../../../entity/service");
exports.findUrl = {
    Mutation: {
        findUrl: (_, { serviceId }) => __awaiter(void 0, void 0, void 0, function* () {
            const service = yield service_1.Service.findOne({ where: { id: serviceId } });
            return service === null || service === void 0 ? void 0 : service.pictureUrl;
        }),
    },
};
//# sourceMappingURL=resolvers.js.map
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
exports.searchServicesUser = void 0;
const service_1 = require("../../entity/service");
const typeorm_1 = require("typeorm");
const User_1 = require("../../entity/User");
exports.searchServicesUser = {
    Query: {
        searchServicesUser: (_, { search, limit, offset }) => __awaiter(void 0, void 0, void 0, function* () {
            let userQB = typeorm_1.getConnection().getRepository(User_1.User).createQueryBuilder("u");
            let ServiceQB = typeorm_1.getConnection()
                .getRepository(service_1.Service)
                .createQueryBuilder("s");
            userQB = userQB.andWhere("u.username ilike :username", {
                username: `%${search}%`,
            });
            ServiceQB = ServiceQB.andWhere("s.name ilike :name", {
                name: `%${search}%`,
            })
                .orWhere("s.category ilike :category", {
                category: `%${search}%`,
            })
                .orWhere("s.coutryId ilike :coutryId", {
                coutryId: `%${search}%`,
            });
            const user = yield userQB.take(limit).skip(offset).getMany();
            const service = yield ServiceQB.take(limit).skip(offset).getMany();
            console.log("user", user);
            console.log("service", service);
            return { user, service };
        }),
    },
};
//# sourceMappingURL=resolvers.js.map
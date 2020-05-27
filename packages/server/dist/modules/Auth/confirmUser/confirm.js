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
const StartServer_1 = require("../../../StartServer");
const redis_1 = require("../../../redis");
const redisPrefix_1 = require("../../../Utils/constant/redisPrefix");
const User_1 = require("../../../entity/User");
exports.ConfirmEmail = () => {
    StartServer_1.app.get("/graphql/confirm/:token", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const token = req.params.token;
        const userId = yield redis_1.redis.get(redisPrefix_1.confirmationPrefix + token);
        if (!userId) {
            return false;
        }
        yield User_1.User.update({ id: userId }, { confirm: true });
        yield redis_1.redis.del(redisPrefix_1.confirmationPrefix + token);
        return res.redirect("http://doffyinc.com");
    }));
};
//# sourceMappingURL=confirm.js.map
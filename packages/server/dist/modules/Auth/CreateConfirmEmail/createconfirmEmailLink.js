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
exports.createConfirmEmailLink = void 0;
const uuid_1 = require("uuid");
const redisPrefix_1 = require("../../../Utils/constant/redisPrefix");
exports.createConfirmEmailLink = (url, userId, redis) => __awaiter(void 0, void 0, void 0, function* () {
    const token = uuid_1.v4();
    console.log("token", token);
    yield redis.set(redisPrefix_1.confirmationPrefix + token, userId, "ex", 60 * 60 * 24 * 365);
    return `${url}/confirm/${token}`;
});
//# sourceMappingURL=createconfirmEmailLink.js.map
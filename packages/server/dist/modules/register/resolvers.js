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
const common_1 = require("@doffy/common");
const User_1 = require("./../../entity/User");
const bcrypt = require("bcryptjs");
const formatYupError_1 = require("../../Utils/FormatYupError/formatYupError");
const createconfirmEmailLink_1 = require("../CreateConfirmEmail/createconfirmEmailLink");
const ErrorMessage_1 = require("../../Utils/FormatYupError/ErrorMessage");
const sendMail_1 = require("../CreateConfirmEmail/sendMail");
const host_1 = require("../../Utils/host/host");
const redis_1 = require("../../redis");
exports.registerResolver = {
    Mutation: {
        register: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            try {
                yield common_1.validationSchema.validate(args, { abortEarly: false });
            }
            catch (err) {
                return formatYupError_1.formatYupError(err);
            }
            const { username, email, password, confirmPassword } = args;
            const userAlreadyExist = yield User_1.User.findOne({
                where: { email },
                select: ["id"],
            });
            if (userAlreadyExist) {
                return {
                    path: "email",
                    message: ErrorMessage_1.duplicateEmail,
                };
            }
            if (password !== confirmPassword) {
                return {
                    path: "password",
                    message: "your password doesnt correspond",
                };
            }
            const hashedPassword = yield bcrypt.hash(password, 10);
            const user = yield User_1.User.create({
                username,
                email,
                password: hashedPassword,
            }).save();
            console.log("use id", user.id);
            yield sendMail_1.sendEmail(email, yield createconfirmEmailLink_1.createConfirmEmailLink(host_1.host, user.id, redis_1.redis));
            return null;
        }),
    },
};
//# sourceMappingURL=resolvers.js.map
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
exports.sendPasswordEmail = void 0;
const nodemailer = require("nodemailer");
require("dotenv/config");
const User_1 = require("../../../entity/User");
const Email_1 = require("./Email");
function sendPasswordEmail(email, token) {
    return __awaiter(this, void 0, void 0, function* () {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            port: 465,
            secure: true,
            auth: {
                user: process.env.EMAIL_LEE,
                pass: process.env.PASSWORD_LEE,
            },
        });
        const userMessage = yield User_1.User.findOne({ where: { email } });
        const recipient = (userMessage === null || userMessage === void 0 ? void 0 : userMessage.username) ? userMessage.username : "user";
        transporter.sendMail({
            from: process.env.EMAIL_LEE,
            to: email,
            subject: "Password Change confirmation code",
            text: "Password change ",
            html: Email_1.Email(recipient, token),
        });
    });
}
exports.sendPasswordEmail = sendPasswordEmail;
//# sourceMappingURL=sendPasswordMail.js.map
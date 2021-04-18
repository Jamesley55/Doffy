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
exports.sendEmail = void 0;
const nodemailer = require("nodemailer");
require("dotenv/config");
const User_1 = require("../../../entity/User");
const Email_1 = require("./Email");
function sendEmail(email, url) {
    return __awaiter(this, void 0, void 0, function* () {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            port: 465,
            secure: true,
            auth: {
                user: "interviewintuit@gmail.com",
                pass: "Interview2020",
            },
        });
        const userMessage = yield User_1.User.findOne({ where: { email } });
        const recipient = (userMessage === null || userMessage === void 0 ? void 0 : userMessage.username) ? userMessage.username : "user";
        transporter.sendMail({
            from: "interviewintuit@gmail.com",
            to: email,
            subject: "Please Confirm your Email",
            text: "Email confirmation",
            html: Email_1.Email(recipient, url),
        });
    });
}
exports.sendEmail = sendEmail;
//# sourceMappingURL=sendMail.js.map
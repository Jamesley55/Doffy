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
const nodemailer = require("nodemailer");
require("dotenv/config");
function sendEmail(email, url) {
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
        const info = yield transporter.sendMail({
            from: "leebusiness21@gmail.com",
            to: email,
            subject: "Hello ✔",
            text: "Hello world?",
            html: `<a href = "${url}" > ${url}</a>`,
        });
        console.log("Message sent: %s", info.messageId);
    });
}
exports.sendEmail = sendEmail;
//# sourceMappingURL=sendMail.js.map
import nodemailer = require("nodemailer");
import "dotenv/config";
import { User } from "../../../entity/User";
import { Email } from "./Email";

// async..await is not allowed in global scope, must use a wrapper
export async function sendEmail(email: string, url: string) {
	const transporter = nodemailer.createTransport({
		service: "gmail",
		port: 465,
		secure: true, // true for 465, false for other ports
		auth: {
			user: process.env.EMAIL_LEE, // generated ethereal user
			pass: process.env.PASSWORD_LEE, // generated ethereal password
		},
	});
	const userMessage = await User.findOne({ where: { email } });
	// send mail with defined transport object
	const recipient = userMessage?.username ? userMessage.username : "user";
	transporter.sendMail({
		from: process.env.EMAIL_LEE, // sender address
		to: email, // list of receivers
		subject: "Please Confirm your Email", // Subject line
		text: "Email confirmation", // plain text body
		html: Email(recipient, url), // html body
	});
}

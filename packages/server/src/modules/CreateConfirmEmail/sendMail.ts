import nodemailer = require("nodemailer");
import "dotenv/config";

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

  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: "leebusiness21@gmail.com", // sender address
    to: email, // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: `<a href = "${url}" > ${url}</a>`, // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
}

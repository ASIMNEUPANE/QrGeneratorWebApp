const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "asimneupane11@gmail.com",
    pass: "tbghlfogijstuyve",
  },
});

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take our messages");
  }
});

const sendEmail = async (payload) => {
  const { to, html, attachments } = payload;

  const messageOptions = {
    from: "asimneupane11@gmail.com",
    to: to.toString(),
    subject: "QRCODE from QRgenerator",

    html,
    attachments,
  };
  const info = await transporter.sendMail(messageOptions);
  return info.messageId;
};

module.exports = { sendEmail };

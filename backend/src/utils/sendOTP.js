const nodemailer = require("nodemailer");
const { otpTemplate } = require("./emailTemplates");  // ⬅ IMPORT TEMPLATE

const sendOTPEmail = async (email, otp) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"Graphura" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Your OTP",
      html: otpTemplate(otp),   // ⬅ USE TEMPLATE HERE
    };

    await transporter.sendMail(mailOptions);
    console.log("OTP email sent to:", email);
  } catch (err) {
    console.error("OTP Email Error:", err);
    throw new Error("Failed to send OTP Email");
  }
};

module.exports = { sendOTPEmail };

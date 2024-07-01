const nodemailer = require("nodemailer");
async function sendOtpEmail(email, name, otp) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.AUTH_EMAIL,
      pass: process.env.AUTH_PASS,
    },
  });
  const info = await transporter.sendMail({
    from: process.env.AUTH_EMAIL, // sender address
    to: email, // list of receivers
    subject: "Please verify your email", // Subject line
    html: `<body style="font-family:Arial,Helvetica,sans-serif"><img src="https://i.ibb.co/j3GzyTN/logo.png" alt="oreby"><h3 style="font-size:20px">Hi ${name}!</h3><b>Your verification code is ${otp}</b><p>Enter this code in our website or app to activate your customer portal account.</p><p>We’re glad you’re here!</p><p>The Oreby Ecommerce team</p></body>`, // html body
  });
}

module.exports = sendOtpEmail;

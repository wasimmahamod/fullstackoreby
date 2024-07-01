const nodemailer = require("nodemailer");
async function ForgetPasswordEmail(email, token) {
  let link = `http://localhost:5173/changepassword/${token}`;
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
    subject: "Please change your password ", // Subject line
    html: `<body style=font-family:Arial,Helvetica,sans-serif><img alt=oreby src=https://i.ibb.co/j3GzyTN/logo.png><br><a href=${link} style=font-family:Arial,Helvetica,sans-serif;background:#000;color:#fff;padding:10px;display:inline-block;margin-top:5px>change password</a><p>We’re glad you’re here!<p>The Oreby Ecommerce team`, // html body
  });
}

module.exports = ForgetPasswordEmail;

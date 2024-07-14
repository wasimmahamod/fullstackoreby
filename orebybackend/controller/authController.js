const EmailValidation = require("../helpers/emailValidation");
const sendOtpEmail = require("../helpers/sendOtpEmail");
const userSchema = require("../model/userSchema");
const bcrypt = require("bcrypt");
const aleaRNGFactory = require("number-generator/lib/aleaRNGFactory");
var jwt = require("jsonwebtoken");
const ForgetPasswordEmail = require("../helpers/forgetpasswordemail");

async function RegistrationController(req, res) {
  let { name, email, password, phone, avatar } = req.body;
  let existingUser = await userSchema.find({ email });

  if (!name || !email || !password) {
    return res.send({ error: "invalid credentials" });
  } else if (!EmailValidation(email)) {
    return res.send({ error: "Please send a valid Email" });
  } else if (existingUser.length > 0) {
    return res.status(400).json({ error: "Email already registered" });
  } else {
    bcrypt.hash(password, 10, async function (err, hash) {
      if (err) {
        res.send({ error: err });
      } else {
        let user = new userSchema({
          name,
          email,
          password: hash,
          phone,
          avatar,
        });

        const generator1 = aleaRNGFactory(Date.now());
        let generateNumber = generator1.uInt32();
        let randomOtp = generateNumber.toString().substring(0, 6);

        try {
          await user.save();
          sendOtpEmail(email, name, randomOtp);
          await userSchema.findOneAndUpdate(
            { email },
            { $set: { otp: randomOtp } },
            { new: true }
          );
          res.send(user);
        } catch (error) {
          res.send(error);
        }
      }
    });
  }
}

async function LoginController(req, res) {
  let { email, password } = req.body;
  let existingUser = await userSchema.find({ email });

  if (existingUser.length > 0) {
    bcrypt.compare(password, existingUser[0].password, function (err, result) {
      if (result) {
        res
          .status(200)
          .send({ success: "login success", user: existingUser[0] });
      } else {
        return res.status(404).send({ error: "Login Faild" });
      }
    });
  } else {
    return res.status(404).send({ error: "Login Faild" });
  }
}

async function OtpverifyController(req, res) {
  let { email, otp } = req.body;

  try {
    let existingUser = await userSchema.find({ email });

    if (existingUser.length > 0) {
      if (existingUser[0].otp == otp) {
        let updateEmailVarify = await userSchema.findOneAndUpdate(
          { email },
          { emailVerify: "true", otp: "" }
        );
        res.status(200).send({ success: "Email verified" });
      } else {
        return res.status(404).send({ error: "Otp not match  " });
      }
    } else {
      return res.status(404).send({ error: "Email not found " });
    }
  } catch (error) {
    return res.status(404).send({ error: error });
  }
}

async function ForgetPasswordController(req, res) {
  let { email } = req.body;

  try {
    let existingUser = await userSchema.find({ email });

    if (existingUser.length > 0) {
      var token = jwt.sign({ email }, "mern");

      let settoken = await userSchema.findOneAndUpdate(
        { email },
        { $set: { token: token } },
        { new: true }
      );
      ForgetPasswordEmail(email, token);

      res.send(existingUser);
    } else {
      return res.status(404).send({ error: "email not found " });
    }
  } catch (error) {
    return res.status(404).send({ error: error });
  }
}

async function ChangepasswordController(req, res) {
  let { email, newpassword } = req.body;
  let { token } = req.headers;

  try {
    let existingUser = await userSchema.find({ email });
    if (existingUser.length > 0) {
      console.log("success");
      jwt.verify(token, "mern", function (err, decoded) {
        if (err) {
          return res.status(404).send({ error: "token  not found " });
        } else {
          if (decoded.email == email) {
            bcrypt.hash(newpassword, 10, async function (err, hash) {
              let changepassword = await userSchema.findOneAndUpdate(
                { email },
                { password: hash },
                { new: true }
              );

              res.send(changepassword);
            });
          }
        }
      });
    } else {
      return res.status(404).send({ error: "email not found " });
    }
  } catch (error) {
    return res.status(404).send({ error });
  }
}
async function AlluserController(req, res) {
  try {
    let users = await userSchema.find({});
    res.send(users);
  } catch (error) {
    return res.status(404).send({ error: error });
  }
}
async function UpdateUserController(req, res) {
  let { email, name } = req.body;

  try {
    let user = await userSchema.findOneAndUpdate(
      { email },
      { name: name },
      { new: true }
    );
    res.send(user);
  } catch (error) {
    return res.status(404).send({ error: error });
  }
}
module.exports = {
  RegistrationController,
  LoginController,
  OtpverifyController,
  ForgetPasswordController,
  ChangepasswordController,
  AlluserController,
  UpdateUserController,
};

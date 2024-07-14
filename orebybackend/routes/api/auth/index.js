const express = require("express");
const {
  RegistrationController,
  LoginController,
  OtpverifyController,
  ForgetPasswordController,
  ChangepasswordController,
  AlluserController,
  UpdateUserController,
} = require("../../../controller/authController");
const router = express.Router();

router.post("/registration", RegistrationController);
router.post("/login", LoginController);
router.post("/otpverify", OtpverifyController);
router.post("/forgetpassword", ForgetPasswordController);
router.post("/changepassword", ChangepasswordController);
router.get("/alluser", AlluserController);
router.post("/updateuser", UpdateUserController);
module.exports = router;

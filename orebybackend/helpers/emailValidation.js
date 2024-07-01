function EmailValidation(email) {
  let emailtest = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);

  return emailtest;
}

module.exports = EmailValidation;

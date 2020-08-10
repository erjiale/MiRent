//  Import neccessary libs
const router = require("express").Router();
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const emailValidator = require("email-validator");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();
//  Import schema models
const Users = require("../../models/users");

//  Login Error message
const inputError = "Incorrect email/password.";

//  Login REST API
router.post("/", async (req, res) => {
  let email = req.body.email;
  let pass = req.body.password;
  if (!emailValidator.validate(email))
    return res.status(400).send({ error: inputError });

  let account = await Users.findOne({ email });

  if (!account || !(await bcrypt.compare(pass, account.password))) {
    return res.status(400).send({ error: inputError });
  } else {
    const token = jwt.sign({ _id: account._id }, process.env.SECRET_TOKEN);
    return res.header("auth-token", token).send({
      message: `Welcome to MiRent! ${account.username}`,
      token,
    });
  }
});

module.exports = router;

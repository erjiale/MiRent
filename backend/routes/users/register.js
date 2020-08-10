const router = require("express").Router();
const mongoose = require("mongoose");
const Users = require("../../models/users");
const bcrypt = require("bcryptjs");
const emailValidator = require("email-validator");

router.post("/", async (req, res) => {
  if (!emailValidator.validate(req.body.email))
    return res.status(400).send({ email: "Invalid format" });
  if (req.body.username.length < 6)
    return res.status(400).send({ username: "Must be at least 6 characters" });
  if (req.body.password.length < 6)
    return res.status(400).send({ password: "Must be at least 6 characters" });

  let emailExist = await Users.findOne({
    email: req.body.email,
  });
  if (emailExist) return res.status(400).send({ email: "Already exists" });

  const salt = await bcrypt.genSalt(10);
  const encryptPassword = await bcrypt.hash(req.body.password, salt);

  let newUser = new Users({
    email: req.body.email,
    username: req.body.username,
    password: encryptPassword,
  });

  try {
    await newUser.save();
    return res.send(newUser);
  } catch (err) {
    console.log(err);
    return res.status(500).send({ error: "Server problem" });
  }
});

module.exports = router;

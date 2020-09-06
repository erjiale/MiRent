//  Libiaries
const router = require("express").Router();
const mongoose = require("mongoose");
//  Schema
const Users = require("../../models/users");
const Items = require("../../models/items");
//  Function
const verify = require("../verifyUser");

const errors = {
  type1: "ID doesn't exist",
  type2: "Server Issue",
};

router.delete("/", verify, async (req, res) => {
  const { username } = req.user;

  //  Confirms an id exist in database
  if (!(await Users.findById(username))) {
    return res.status(400).send({ error: errors.type1 });
  }

  try {
    // Delete the User and all of its Items
    await Users.deleteOne({ username });
    await Items.deleteMany({ ownerUsername: username });
    return res.send({ message: `Deleted user` });
  } catch (err) {
    console.log(err);
    return res.status(500).send({ error: errors.type2 });
  }
});

module.exports = router;

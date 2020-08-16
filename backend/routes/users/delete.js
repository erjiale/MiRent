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

router.delete("/:uid", verify, async (req, res) => {
  const id = req.params.uid;
  const _id = req.user._id;

  //  Confirms an id exist in database
  if (!(await Users.findById(_id))) {
    return res.status(400).send({ error: errors.type1 });
  }
  if (id !== _id)
    return res.status(400).send({ error: "Permission denied: Not yours" });

  try {
    await Users.deleteOne({ _id });
    await Items.deleteMany({ ownerId: _id });
    return res.send({ message: `Deleted user` });
  } catch (err) {
    console.log(err);
    return res.status(500).send({ error: errors.type2 });
  }
});

module.exports = router;

//  Libiaries
const router = require("express").Router();
const mongoose = require("mongoose");
//  Schema
const Users = require("../../models/users");
const Items = require("../../models/items");
//  Function
const verify = require("../verifyUser");
//  Error handles
const errors = {
  type1: "ID doesn't exist",
  type2: "Server Issue",
};

router.delete("/:id", verify, async (req, res) => {
  let _id = req.user._id;

  // Checks we deleting our own account and not someone else's
  if (_id !== req.params.id)
    return res.status(400).send({ error: "Access denied!" });

  //  Confirms an id exist in database
  if (!(await Users.findById(_id))) {
    return res.status(400).send({ error: errors.type1 });
  }

  try {
    //  Deletes user
    await Users.deleteOne({ _id });
    //  Deletes past post from user
    await Items.deleteMany({ ownerId: _id });
    return res.send({ message: `Deleted` });
  } catch (err) {
    console.log(err);
    return res.status(500).send({ error: errors.type2 });
  }
});

module.exports = router;

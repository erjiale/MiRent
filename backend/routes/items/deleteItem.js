//  Libaries
const router = require("express").Router();
const mongoose = require("mongoose");
const verify = require("../verifyUser");

//  Model
const Items = require("../../models/items");

const errors = {
  type1: "ID doesn't exist",
  type2: "Server Issue",
};

router.delete("/:iid", verify, async (req, res) => {
  let creator_username = req.user.username;
  let item_id = req.params.iid;

  //  Check if item exist
  let item = await Items.findById(item_id);

  if (!item) return res.status(400).send({ error: errors.type1 });

  try {
    //  Confirm its the ownerrs item
    if (item.ownerUsername !== creator_username) {
      return res.status(400).send({ error: `Permission not allowed` });
    }
    await Items.findByIdAndDelete(item_id);
    return res.send(item_id);
  } catch (err) {
    console.log(err);
    return res.status(500).send({ error: errors.type2 });
  }
});

module.exports = router;

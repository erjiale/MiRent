//  Libaries
const router = require("express").Router();
const mongoose = require("mongoose");
const verify = require("../verifyUser");

//  Model
const Items = require("../../models/items");

const errors = {
  type1: "ID doesn't exist",
  type2: "Server Issue",
  type3: "Access denied! Not your item",
};

router.delete("/:iid", verify, async (req, res) => {
  let creator_id = req.user._id;
  let item_id = req.params.iid;

  try {
    let item = await Items.findById({ _id: item_id });
    console.log(item);
    if (!item) return res.status(400).send({ error: errors.type1 });

    // Check if is our own item
    if (item.ownerId !== creator_id)
      return res.status(400).send({ error: errors.type3 });

    // Delete Item
    await Items.findByIdAndDelete(item_id);
    return res.send({ message: `Deleted` });
  } catch (err) {
    console.log(err);
    return res.status(500).send({ error: errors.type2 });
  }
});

module.exports = router;

//  Libaries
const router = require("express").Router();
const mongoose = require("mongoose");
const verify = require("../verifyUser");

//  Model
const Items = require("../../models/items");

router.patch("/:iid", verify, async (req, res) => {
  let creator_id = req.user._id;
  let item_id = req.params.iid;
  let updatedName = req.body.name;

  console.log(item_id);
  let item = await Items.findOne({ _id: item_id });
  console.log(item);
  if (!item) return res.status(400).send({ item: "Not found" });

  try {
    if (item.ownerId !== creator_id)
      return res.status(400).send({ error: "Access denied!" });
    await Items.findOneAndUpdate({ item_id }, { name: updatedName });
    return res.send({ message: `Updated ${item_id}` });
  } catch (err) {
    console.log(err);
    return res.status(500).send({ error: "Server error" });
  }
});

module.exports = router;

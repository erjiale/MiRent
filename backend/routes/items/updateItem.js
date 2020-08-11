//  Import Libraries
const router = require("express").Router();
//  Schema
const Items = require("../../models/items");
//  Function
const verify = require("../verifyUser");
const { model } = require("../../models/items");
//  Error messages
const errors = {
  type1: "Error",
  type2: "Server Error",
};

router.patch("/:item_id", verify, async (req, res) => {
  let creator_id = req.user._id;
  let item_id = req.params.item_id;
  let updatedName = req.body.name;

  try {
    let item = await Items.findById({ _id: item_id });

    // Check 'item' exists, and item's owner matches the logged in user.
    if (!item || creator_id !== item.ownerId)
      return res.status(400).send({ error: errors.type1 });

    // Update Item by _id -> name = updatedName
    const test = await Items.updateOne({ _id: item_id }, { name: updatedName });
    console.log(test);
    return res.send({ message: `Successfully updated` });
  } catch (err) {
    console.log(err);
    return res.status(500).send({ error: errors.type2 });
  }
});

module.exports = router;

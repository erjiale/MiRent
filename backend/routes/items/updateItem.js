//  Libaries
const router = require("express").Router();
const mongoose = require("mongoose");
const verify = require("../verifyUser");

//  Model
const Items = require("../../models/items");

router.patch("/:iid", verify, async (req, res) => {
  let creator_username = req.user.username;
  let item_id = req.params.iid;
  let updatedName = req.body.name;

  // Check if Item EXISTS in the database
  let item = await Items.findById({ _id: item_id });
  if (!item) return res.status(400).send({ item: "Not found" });

  try {
    //  Confirms that its the creator/owner of post
    if (item.ownerUsername !== creator_username)
      return res.status(400).send({ error: "Access denied!" });
    // Updates the Item's Name
    const updatedItem = await Items.findByIdAndUpdate(
      { _id: item_id },
      { name: updatedName }
    );
    return res.send(item_id);
  } catch (err) {
    console.log(err);
    return res.status(500).send({ error: "Server error" });
  }
});

module.exports = router;

const router = require("express").Router();
const mongoose = require("mongoose");
const verify = require("../verifyUser");
const Items = require("../../models/items");

router.post("/", verify, async (req, res) => {
  //  Create new items
  const item = new Items({
    ownerUsername: req.user.username,
    name: req.body.name,
  });
  // console.log(item);

  try {
    //  Save into mongoose
    await item.save();
    return res.send(item);
  } catch (err) {
    console.log(err);
    return res.status(500).send({ error: `Server Issues` });
  }
});

module.exports = router;

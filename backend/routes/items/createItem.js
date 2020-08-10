const router = require("express").Router();
const mongoose = require("mongoose");
const verify = require("../verifyUser");
const Items = require("../../models/items");

router.post("/", verify, async (req, res) => {
  const item = new Items({
    ownerId: req.user._id,
    name: req.body.name,
  });
  console.log(item);

  try {
    await item.save();
    return res.send( item );
  } catch (err) {
    console.log(err);
    return res.status(500).send({ error : `Server Issues` });
  }

});

module.exports = router;

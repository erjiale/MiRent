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
});

module.exports = router;

//  Libaries
const router = require("express").Router();
const mongoose = require("mongoose");

//  Model
const Items = require("../../models/items");

router.get("/", async (req, res) => {
  const allItems = await Items.find();
  return res.send(allItems);
});

module.exports = router;

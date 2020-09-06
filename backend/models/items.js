const mongoose = require("mongoose");

const Items = new mongoose.Schema({
  // ownerId: {
  //   type: String,
  //   require: true,
  // },
  ownerUsername: {
    type: String,
    require: true,
  },
  name: {
    type: String,
    require: true,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Items", Items);

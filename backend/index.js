const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 8000;
const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");

//  IMPORT User Routes
const registerRoute = require("./routes/users/register");
const loginRoute = require("./routes/users/login");
const deleteRoute = require("./routes/users/delete");
//  IMPORT Items Routes
const createItemRoute = require("./routes/items/createItem");
const deleteItemRoute = require("./routes/items/deleteItem");
const updateItemRoute = require("./routes/items/updateItem");

mongoose.connect(
  process.env.MONGODB_CONNECT,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Connected to mongodb");
  }
);

// Middlewares
app.use(cors());
app.use(express.json());

// Routes --> Users
app.use("/api/register", registerRoute);
app.use("/api/login", loginRoute);
app.use("/api/user", deleteRoute);

// Routes --> Items
app.use("/api/items", createItemRoute); // CREATE Item
app.use("/api/items", deleteItemRoute); // DELETE Item
app.use("/api/items", updateItemRoute); // UPDATE Item

app.get("*", (req, res) => {
  res.send("Welcome to MiRent!");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

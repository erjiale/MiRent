const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 8000;
const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");
// IMPORT Routes
const registerRoute = require("./routes/users/register");
const loginRoute = require("./routes/users/login");
const createItemRoute = require("./routes/items/createItem");
const deleteItemRoute = require("./routes/items/deleteItem");

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

// Routes --> Items
app.use("/api/items", createItemRoute);
app.use("/api/items", deleteItemRoute);

app.get("*", (req, res) => {
  res.send("Welcome to MiRent!");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
// MONGODB_CONNECT = mongodb+srv://admin:adminpassword@mirent-obbuq.mongodb.net/test?retryWrites=true&w=majority
// SECRET_TOKEN = jidajfvm94whq9n8uthmwsjm

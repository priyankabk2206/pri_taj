const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const authRoutes = require("./routes/auth");

const app = express();
app.use(bodyParser.json());
app.use(express.static("public"));

mongoose.connect("YOUR_MONGODB_CONNECTION_STRING")
.then(() => console.log("MongoDB Connected"));

app.use("/api", authRoutes);

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
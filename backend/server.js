const express = require("express");
const app = express();
const env = require("dotenv");
env.config();

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server started on port ${PORT}`));

app.get("/", (req, res) => {
  res.send("Api is running");
});

const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
const port = 5000 || process.env.PORT;

// middleware
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Blog App server is running");
});

app.listen(port, () => {
  console.log(`The server is running from port ${port}`);
});

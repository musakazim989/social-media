const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const app = express();

dotenv.config();

app.use(cors());



const port = process.env.PORT || 8000;

console.log("first");

app.listen(port, () => {
  console.log(`Backend running on ${port}`);
});

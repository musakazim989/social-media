const express = require("express")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const cors = require("cors")
const { readdirSync } = require("fs")
const app = express()

dotenv.config()

// middleware
app.use(cors())

// routes
readdirSync("./routes").map((f) => app.use("/", require("./routes/" + f)))

// database
mongoose.connect(process.env.MONGODB_CONNECTON_URL).then(() => {
  console.log("MongoDB connected")
})

const port = process.env.PORT || 8000

app.listen(port, () => {
  console.log(`Backend running on ${port}`)
})
 
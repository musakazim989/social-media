const express = require("express")
const { readdirSync } = require("fs")
const cors = require("cors")
const dotenv = require("dotenv")

const app = express()
dotenv.config()
app.use(cors())

readdirSync("./routes").map((f) => app.use("/", require("./routes/" + f)))

const port = process.env.PORT || 8000

app.listen(port, () => {
  console.log(`Backend running on ${port}`)
})

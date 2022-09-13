const express = require("express")
const { myuser } = require("../controllers/user")

const router = express.Router()

router.get("/user", myuser)

module.exports = router

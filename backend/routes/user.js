const express = require("express")
const { register } = require("../controllers/register")

const router = express.Router()

router.get("/register", register)

module.exports = router

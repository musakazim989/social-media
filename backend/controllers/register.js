const User = require("../models/User.js")

exports.register = async (req, res) => {
  const {
    first_name,
    last_name,
    email,
    password,
    username,
    bYear,
    bMonth,
    bDay,
    gender,
  } = req.body

  const user = await new User({
    first_name,
    last_name,
    email,
    password,
    username,
    bYear,
    bMonth,
    bDay,
    gender,
  }).save()

  res.json(user)
}
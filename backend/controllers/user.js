const { validationEmail, validateLength } = require("../helpers/validation.js")
const bcrypt = require("bcrypt")
const User = require("../models/User.js")

exports.register = async (req, res) => {
  try {
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

    // email validation

    if (!validationEmail(email)) {
      return res.status(400).json({ message: "Invalid email address." })
    }

    // user validation wheather user exist or not
    const check = await User.findOne({ email })
    if (check) {
      res.status(400).json({
        message: "This email already exist, try different email to continue.",
      })
    }

    // text length check

    if (!validateLength(first_name, 3, 30)) {
      return res
        .status(400)
        .json({ message: "First name must between 3 and 30 characters." })
    }
    if (!validateLength(last_name, 3, 30)) {
      return res
        .status(400)
        .json({ message: "Last name must between 3 and 30 characters." })
    }

    // password status and don't show the max number as hacker can get the details

    if (!validateLength(password, 6, 40)) {
      return res
        .status(400)
        .json({ message: "Password must be atleast 6 characters." })
    }

    const cryptedPassword = await bcrypt.hash(password, 12)
    console.log(cryptedPassword)

    return

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
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
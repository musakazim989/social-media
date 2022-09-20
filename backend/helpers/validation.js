const User = require("../models/User")

exports.validationEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
}

exports.validateLength = (text, min, max) => {
  if (text.length > max || text.length < min) {
    return false
  }
  return true
}

// set a unique user name

exports.validateUsername = async (username) => {
  let a = false

  do {
    let check = await User.findOne({ username })
    console.log("first", check)
    if (check) {
      username += (+new Date() * Math.random()).toString().substring(0, 2)
      a = true
    } else {
      a = false
    }
  } while (a)
  return username
}

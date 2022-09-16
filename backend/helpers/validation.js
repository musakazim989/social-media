exports.validationEmail = (email) => {
  return String(email)
    .toLocaleLowerCase()
    .match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
}

exports.validateLength = (text, min, max) => {
  if (text.length > max || text.length < min) {
    return false
  }
  return true
}

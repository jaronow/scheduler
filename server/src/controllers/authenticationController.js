const {User} = require('../models');
const jwt = require('jsonwebtoken');
const config = require('../config/config');

function jwtSignUser (user) {
  return jwt.sign(user, config.authentication.jwtSecret, {
    expiresIn: "1hr"
  })
}

module.exports = {
  async login (req, res) {
    try {
      const {email, password} = req.body
      const user = await User.findOne({
        where: {
          email: email
        }
      })
      const validPassword = await user.comparePassword(password)
      console.log(validPassword)
      if (!user || !validPassword) {
        return res.status(404).json({
          status: false,
          message: 'Incorrect login credentials'
        })
      }
      let selectedUser = user[0]
      let userPayload = {user: selectedUser}
      let token = jwtSignUser(userPayload)
      return res.status(200).json({
        status: true,
        user: user,
        token: token
      })
    } catch (err) {
      res.status(500).json({
        status: false,
        message: 'Oops, our server had an issue, try again.'
      })
      console.log(err)
    }
  },
  async register (req, res) {
    try {
      const user = await User.create(req.body)
      let selectedUser = user[0]
      let userPayload = {user: selectedUser}
      let token = jwtSignUser(userPayload)
      return res.json({
        status: true,
        user: user,
        token: token
      })
    } catch (err) {
      res.status(409).json({
        status: false,
        message: `${req.body.email} is already in use!`
      })
    }
  }
};

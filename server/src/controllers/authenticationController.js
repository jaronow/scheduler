const {User} = require('../models')

module.exports = {
  async login (req, res) {
    try {
      const {email, password} = req.body
      const user = await User.findOne({
        where: {
          email: email
        }
      })
      const validPassword = password === user.password
      if (!user || !validPassword) {
        return res.status(404).json({
          status: false,
          message: 'Incorrect login credentials'
        })
      }
      return res.status(200).json({
        status: true,
        user: user
      })
    } catch (err) {
      res.status(500).json({
        status: false,
        message: 'Oops, something went wrong, try again.',
        error: err
      })
    }
  },
  async register (req, res) {
    try {
      const user = await User.create(req.body)
      return res.json({
        status: true,
        user: user
      })
    } catch (err) {
      res.status(409).json({
        status: false,
        message: `${req.body.email} is already in use!`
      })
    }
  }
};

const {User} = require('../models')

module.exports = {
  login (req, res) {
    res.json({
      status: true,
      message: `${req.body.email} logged in`
    });
  },
  async register (req, res) {
    try {
      const user = await User.create(req.body)
      return res.json({
        status: true,
        user: user
      })
    } catch (err) {
      res.status(400).json({
        status: false,
        message: `${req.body.email} is already in use!`
      })
    }
  }
};

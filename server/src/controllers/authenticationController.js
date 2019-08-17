const {User} = require('../models')

module.exports = {
  login (req, res) {
    res.send({
      status: true,
      message: `${req.body.email} logged in`
    });
  },
  async register (req, res) {
    try {
      const user = await User.create(req.body)
      res.send(user.toJSON())
    } catch (err) {
      res.status(400).send({
        error: `${req.body.email} is already in use!`
      })
    }
  }
};

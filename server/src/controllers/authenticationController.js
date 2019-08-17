module.exports = {
  login (req, res) {
    res.send({
      status: true,
      message: `${req.body.email} logged in`
    });
  },
  register (req, res) {
    res.send({
      status: true,
      message: `User, ${req.body.email}, created!`
    });
  }
};

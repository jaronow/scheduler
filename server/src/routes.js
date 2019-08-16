module.exports = (app) => {
  app.post('/login', (req, res) => {
    res.send({
      status: true,
      message: `${req.body.email} logged in`
    });
  });

  app.post('/register', (req, res) => {
    res.send({
      status: true,
      message: `User, ${req.body.email}, created!`
    });
  });
}

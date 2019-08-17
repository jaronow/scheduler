const authentication = require('./controllers/authenticationController');

module.exports = (app) => {
  app.post('/login', authentication.login);
  app.post('/register', authentication.register);
};

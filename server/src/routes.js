const authentication = require('./controllers/authenticationController');
const authenticationPolicy = require('./policies/authenticationControllerPolicy')

module.exports = (app) => {
  app.post('/login', authentication.login);
  app.post('/register', authenticationPolicy.register, authentication.register);
};

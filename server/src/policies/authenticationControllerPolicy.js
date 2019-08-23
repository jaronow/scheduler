const Joi = require('joi');

module.exports = {
  register (req, res, next) {
    const schema = {
      name: Joi.string(),
      phone: Joi.number().max(9999999999),
      email: Joi.string().email({ minDomainSegments: 2 }),
      password: Joi.string().regex(/^[a-zA-Z0-9]{8,32}$/),
      admin: Joi.boolean(),
      employee: Joi.boolean()
    }
    const {error, value} = Joi.validate(req.body, schema)
    if (error) {
      switch(error.details[0].context.key) {
        case 'email': res.status(409).json({
          message: 'Please provide a valid email address'
        })
        break;
        case 'password': res.status(409).json({
          message: `Provided password failed to match 1 or both rules:
          <br>
          1. Must contain the following characters: lowercase, uppercase, numbers. No spaces or special characters
          <br>
          2.Must be between 8 and 32 characters in length.`
        })
        break;
        default: res.status(409).json({
          message: 'Something went wrong, try again or contact us'
        })
      }
    } else {
      next()
    }
  }
};

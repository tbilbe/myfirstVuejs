const Joi = require('joi')

module.exports = {
  register (req, res, next) {
    const schema = {
      email: Joi.string().email(),
      password: Joi.string().regex(
        new RegExp('^[a-zA-Z0-9]{8,32}$')
      )
    }

    const {error} = Joi.validate(req.body, schema)

    if (error) {
      switch (error.details[0].context.key) {
        case 'email':
          res.status(400).send({
            error: 'You must provide a valid e-mail address'
          })
          break
        case 'password':
          res.status(400).send({
            error: `The password provided failed to match the criteria:
          <br>
          1. It must contain ONLY the following characters: lowercase, uppercase, numerics.
          <br>
          2. It must be greater than 8 characters in length and less than 32 characters in length.          
          `
          })
          break
        default:
          res.status(400).send({
            error: 'Invalid registration information; check your email and password match!'
          })
      }
    } else {
      next()
    }
  }
}

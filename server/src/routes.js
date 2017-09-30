module.exports = (app) => {
  app.post('/register', (req, res) => {
    res.send({
      message: `Hey ${req.body.email}! You mutha fucka`
    })
  })
}

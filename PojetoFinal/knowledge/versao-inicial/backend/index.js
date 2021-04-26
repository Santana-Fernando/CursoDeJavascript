const app = require('express')()
const consing = require('consign')
const db = require('./config/db')

app.db = db

consing()
    .include('./config/passport.js')
    .then('./config/middlewares.js')
    .then('./api/validation.js')
    .then('./api')
    .then('./config/routes.js')
    .into(app)

app.listen(3000, () => {
    console.log("Back-end executando com sucesso!")
})
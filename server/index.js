const express = require("express")

const app = express()

app.set('secret', 'nodevuemoba')


app.use(require('cors')())
app.use(express.json())
app.use('/uploads',express.static(__dirname + '/uploads'))

require('./plugins/db')(app)
require('./routes/admin')(app)

app.listen(3002, () => {
    console.log('http://localhost:3002');
})
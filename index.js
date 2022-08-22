require('dotenv').config()
const port = process.env.EXPRESS_PORT
const app = require('./src/app')

app.listen(port, () => console.log(`Listening at http://localhost:${port}`))
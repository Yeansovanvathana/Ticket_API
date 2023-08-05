const express = require('express')
const app = express()
const dotenv = require('dotenv')
const cors = require('cors')
// const path = require('path')
const morgan = require('morgan')
const route = require('./server/routes/router')
const connectDB = require('./server/database/connection')
const bodyParser = require('body-parser')
app.use(cors())

dotenv.config({ path : '.env'})
dotenv.config()
const PORT = process.env.PORT || 8000

app.use(morgan('tiny'))
connectDB()
app.use(bodyParser.urlencoded({ extended : true}))
app.use(bodyParser.json())

app.use('/', route)

app.listen(PORT, () => {
    console.log(`Server is listen to port http://localhost:${PORT}`);
    // console.log(path.resolve(__dirname, './navbar-app/index.html'))   
    console.log("-------------- end --------------");
})

const express = require("express")
const dotenv = require("dotenv")
const bodyParser = require('body-parser')
const swagger = require('swagger-ui-express')

const user = require('./routes/user')
const auth = require('./routes/auth')
const post = require('./routes/post')
const swaggerDoc = require('./helpers/swagger')

const app = express()

app.use(bodyParser.json())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

//load config
dotenv.config({path:'./config/config.env'})

//connect DB
const connectDB = require('./config/db')
connectDB()

//Router middleware
app.use('/api/registration', user)
app.use('/api/login', auth)
app.use('/api/articles', post)
app.use('/doc', swagger.serve)
app.use('/doc', swagger.setup(swaggerDoc))

app.listen(3000)


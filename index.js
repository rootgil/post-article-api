const express = require("express")
const dotenv = require("dotenv")
const bodyParser = require('body-parser')
const swagger = require('swagger-ui-express')

const user = require('./routes/user')
const auth = require('./routes/auth')
const post = require('./routes/article')
const swaggerDoc = require('./helpers/swagger')

const app = express()

app.use(bodyParser.json())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

//load config
dotenv.config({path:'./config/config.env'})

//connect DB
const connectDB = require('./config/db')
const { preferences } = require("joi")
connectDB()

// Principale route
app.get('/', (req, res) => {
    res.status(200).json({
        "swagger-documentation": '/doc',
        "description": "API for article posting",
        "principale-route": "/api/"
    })
})

//Router middleware
app.use('/api/registration', user)
app.use('/api/login', auth)
app.use('/api/articles', post)
app.use('/doc', swagger.serve)
app.use('/doc', swagger.setup(swaggerDoc))

app.listen(process.env.PORT || 8080)



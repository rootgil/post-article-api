const { getAll } = require('./article.swagger')
const registration = require('../helpers/registration.swagger')
const login = require('../helpers/auth.swagger')

const swaggerDoc = {
    openapi: "3.0.0",
    info: {
        title: "Article Post",
        version: "1.0.0",
        description: "This is an API for article posting"
    },
    servers: [
        {
            url: "https://article-poster-api.herokuapp.com",
            description: "API root"
        }
    ],
    tags: [
        {
            name: "User",
            description: "User route"
        },
        {
            name: "Post",
            description: "Post route"
        }
    ],
    paths: {
        ...registration,
        ...login,
        ...getAll
    },
    components: {
        securitySchemes: {
            jwt: {
                type: "http",
                scheme: "bearer",
                in: "header",
                bearerFormat: "JWT"
            },
        }
    },
    security: [{
        jwt: []
    }]
}

module.exports = swaggerDoc
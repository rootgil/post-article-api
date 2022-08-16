const { getAll } = require('../helpers/post.swagger')
const registration = require('../helpers/registration.swagger')

const swaggerDoc = {
    openapi: "3.0.0",
    info: {
        title: "Article Post",
        version: "0.0.1",
        description: "This is an API for article posting"
    },
    servers: [
        {
            url: "http://localhost:3000",
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
        "/api/login": {},
        ...getAll
    }
}

module.exports = swaggerDoc
const newUser = {
    tags: ["User"],
    description: "Save a new user",
    responses: {
        200: {
            description: "OK",
            content: {
                'application/json': {
                    schema: {
                        type: 'object',
                        example: {
                            "firstname": "Gilles",
                            "lastname": "AHOUANTCHEDE",
                            "email": "gillesahouantchede@gmail.com",
                            "password": "$2b$10$YJSYJQKB/OmT66m6FDXZWOwIUMiAywZKzVEuxntJ97azuZlMfbCf.",
                            "_id": "62fbaab0aaa9beb8a25cf83f",
                            "__v": 0
                        }
                    }
                }
            }
        }
    },
    requestBody: {
        content: {
            'application/json': {
                schema: {
                    type: "object",
                    properties: {
                        firstname: {
                            type: 'string',
                            description: "user firstname",
                            example: "Gilles"
                        },
                        lastname: {
                            type: 'string',
                            description: "user lastname",
                            example: "AHOUANTCHEDE"
                        },
                        email: {
                            type: 'string',
                            description: "user email",
                            example: "gillesahouantchede@gmail.com"
                        },
                        password: {
                            type: 'string',
                            description: "user password",
                            example: "Gi54r78ZE4sf"
                        }
                    }
                }
            }
        }
    }
}

const registration = {
    "/api/registration":{
        post: newUser,
    }
}

module.exports = registration
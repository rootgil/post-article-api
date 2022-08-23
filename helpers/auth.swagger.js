const login = {
    post: {
        tags: ["User"],
        description: "log a new user",
        responses: {
            200: {
                description: "OK",
                content: {
                    'application/json': {
                        schema: {
                            type: 'object',
                            example: {
                                "success": true,
                                "message": "LoggedIn Successfully",
                                "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmZiNWE3N2Q3YWIxODQyNzUzNjE3MzQiLCJmaXJzdG5hbWUiOiJHYWJpbm92YSIsImxhc3RuYW1lIjoiQUdPVFlTT1VWSSIsImVtYWlsIjoiZ2FiaW5hZXJlcmdvdUBnbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYiQxMCRNTzVjakVLR0FsM0NBMktkcXZZaFhPUUFXSS9rc1AwclBWYXhLQWs1Y0JoMEszWEd1WU4wZSIsIl9fdiI6MCwiaWF0IjoxNjYxMjU0OTYzLCJleHAiOjE2NjE0MzQ5NjN9.4SHld3Hl5VWh0S"
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
                            email: {
                                type: 'string',
                                description: "user email",
                                example: "gabinaerergou@gmail.com"
                            },
                            password: {
                                type: 'string',
                                description: "user password",
                                example:  "61gieE74"
                            }
                        }
                    }
                }
            }
        }
    }
}




const user = {
    "/api/login": login,
}



module.exports = user
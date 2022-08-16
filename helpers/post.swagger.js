const all = {
    get: {
        tags: ['Post'],
        description: "List of all post",
        responses: {
            200: {
                description: "OK",
                content: {
                    'application/json': {
                        schema: {
                            type: "object",
                            example: {
                                _id: "62fb476856efdbea87867cb0",
                                titre: "Informatique",
                                contenu: "L'informatique est la science du traitement automatique et rationnel de l'information par un outil electronique appelé ordinateur",
                                medias: [],
                                date: "2022-08-16T07:29:44.812Z",
                                id_auteur: "62fb17ac10e1d85e49818748",
                                likes: [],
                                comments: [],
                            }
                        }
                    }
                }
            }
        }
    }
}

const getUserById = {
    get: {
        tags: ['Post'],
        summary: "Get post from id params ",
        description: "Get some user post",
        parameters: [
            {
                name: "id",
                in: "query",
                description: "id of the user",
                type: 'string',
                example: "62fb17ac10e1d85e49818748"
            }
        ],
        responses: {
            200: {
                description: "OK",
                content: {
                    'application/json': {
                        schema: {
                            type: "object",
                            example: {
                                _id: "62fb476856efdbea87867cb0",
                                titre: "Informatique",
                                contenu: "L'informatique est la science du traitement automatique et rationnel de l'information par un outil electronique appelé ordinateur",
                                medias: [],
                                date: "2022-08-16T07:29:44.812Z",
                                id_auteur: "62fb17ac10e1d85e49818748",
                                likes: [],
                                comments: [],
                            }
                        }
                    }
                }
            },
            400: {
                description: "No Post for this user"
            }
        }
    }

}

const post = {
    tags: ['Post'],
    decription: "post an article",
    requestBody: {
        content: {
            'application/json': {
                schema: {
                    type: "object",
                    properties: {
                        titre: {
                            type: "string",
                            description: "article title",
                            example: "Computer science"
                        },
                        contenu: {
                            type: "string",
                            description: "article description",
                            example: "Computer science is good"
                        },
                        media: {
                            type: 'array',
                            description: "article media links",
                            example: [
                                "https://i.pcmag.com/imagery/articles/00tLYTqwmgFvacZlYPc5ecO-8.fit_lim.size_1600x900.v1583853669.jpg",
                            ]
                        }
                    }
                }
            }
        }
    },
    responses: {
        200: {
            content: {
                'application/json': {
                    schema: {
                        type: 'string',
                        example: "Article successfuly posted"
                    }
                }
            }
        },
        400: {
            content: {
                'application/json': {
                    schema: {
                        type: 'string',
                        example: "Internal error"
                    }
                }
            }
        }
    }
}

const getAll = {
    "/api/post/all": all,
    "/api/post/user/": getUserById,
    "/api/post/": {
        post: post
    },
}

///api/post/user/{id} for getting parameters by path

module.exports = {
    getAll,
}
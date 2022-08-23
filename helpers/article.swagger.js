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

const getUserPost = {
    get: {
        tags: ['Post'],
        summary: "Get post from id query ",
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
                description: "Bad",
                content: {
                    'application/json': {
                        schema: {
                            type: 'string',
                            example: "No Post for this user"
                        }
                    }
                }
            }
        }
    }

}

const post = {
    tags: ['Post'],
    description: "post an article",
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
            description: "OK",
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
            description: "Bad",
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

const getSelf = {
    tags: ['Post'],
    description: "List of the user post",
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

const getPostById = {
    tags: ['Post'],
    description: "Get Post by his id",
    parameters: [
        {
            name: "id",
            in: "path",
            description: "article id",
            type: 'string',
            example: "62fb2442114bbcb28b186552"
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
        }
    }
}

const deletePostById = {
    tags: ['Post'],
    description: "Delete Post by his id",
    parameters: [
        {
            name: "id",
            in: "path",
            description: "article id",
            type: 'string',
            example: "62fb2442114bbcb28b186552"
        }
    ],
    responses: {
        200: {
            description: "OK",
            content: {
                'application/json': {
                    schema: {
                        type: "string",
                        description: "Delete succes message",
                        example: "The post has been or can't be deleted"
                    }
                }
            }
        },
        400: {
            description: "Bad",
            content: {
                'application/json': {
                    schema: {
                        type: "string",
                        description: "Bad authorisation message",
                        example: "The post can been deleted by only the author"
                    }
                }
            }
        }
    }
}

const comment = {
    tags: ['Post'],
    description: "Comment some post by his give his id",
    parameters: [
        {
            name: "id",
            in: "path",
            description: "article id",
            type: 'string',
            example: "62fb2442114bbcb28b186552"
        }
    ],
    requestBody: {
        content: {
            'application/json': {
                schema: {
                    type: "object",
                    properties: {
                        infos: {
                            type: "string",
                            description: "information for comment",
                            example: "It's very good dear"
                        },
                    }
                }
            }
        }
    },
    responses: {
        200: {
            description: "OK",
            content: {
                'application/json': {
                    schema: {
                        type: "string",
                        description: "Comment succes message",
                        example: "Comment was well added"
                    }
                }
            }
        },
        400: {
            description: "Bad",
            content: {
                'application/json': {
                    schema: {
                        type: "string",
                        description: "Bad authorisation message",
                        example: "Bad information"
                    }
                }
            }
        },
        500: {
            description: "Error",
            content: {
                'application/json': {
                    schema: {
                        type: "string",
                        description: "Server error",
                        example: "error"
                    }
                }
            }
        }
    }
}

const like = {
    tags: ['Post'],
    description: "Like some post by his give his id",
    parameters: [
        {
            name: "id",
            in: "path",
            description: "article id",
            type: 'string',
            example: "62fb2442114bbcb28b186552"
        }
    ],
    requestBody: {
        content: {
            'application/json': {
                schema: {
                    type: "object",
                    properties: {
                        note: {
                            type: "number",
                            description: "article note",
                            example: "4"
                        },
                    }
                }
            }
        }
    },
    responses: {
        200: {
            description: "OK",
            content: {
                'application/json': {
                    schema: {
                        type: "string",
                        description: "Like succes message",
                        example: "Liked successfully"
                    }
                }
            }
        },
        400: {
            description: "Bad",
            content: {
                'application/json': {
                    schema: {
                        type: "string",
                        description: "Bad authorisation message",
                        example: "Bad information / Already liked"
                    }
                }
            }
        },
        500: {
            description: "Error",
            content: {
                'application/json': {
                    schema: {
                        type: "string",
                        description: "Server error",
                        example: "error"
                    }
                }
            }
        }
    }
}

const note = {
    tags: ['Post'],
    description: "Get some post note",
    parameters: [
        {
            name: "id",
            in: "path",
            description: "article id",
            type: 'string',
            example: "62fb2442114bbcb28b186552"
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
                            note: 4.5
                        }
                    }
                }
            }
        },
        400: {
            description: "Bad",
            content: {
                'application/json': {
                    schema: {
                        type: "string",
                        description: "Bad authorisation message",
                        example: "Bad information"
                    }
                }
            }
        },
        500: {
            description: "Error",
            content: {
                'application/json': {
                    schema: {
                        type: "string",
                        description: "Server error",
                        example: "error"
                    }
                }
            }
        }
    }
}

const nbre = {
    tags: ['Post'],
    description: "Get some post comment number",
    parameters: [
        {
            name: "id",
            in: "path",
            description: "article id",
            type: 'string',
            example: "62fb2442114bbcb28b186552"
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
                            number: 4
                        }
                    }
                }
            }
        },
        400: {
            description: "Bad",
            content: {
                'application/json': {
                    schema: {
                        type: "string",
                        description: "Bad authorisation message",
                        example: "Bad information"
                    }
                }
            }
        },
        500: {
            description: "Error",
            content: {
                'application/json': {
                    schema: {
                        type: "string",
                        description: "Server error",
                        example: "error"
                    }
                }
            }
        }
    }
}

const getAll = {
    "/api/articles/all": all,
    "/api/articles/user/": getUserPost,
    "/api/articles/": {
        post: post,
        get: getSelf
    },
    "/api/articles/{id}": {
        get: getPostById,
        delete: deletePostById
    },
    "/api/articles/comment/{id}": {
        put: comment
    },
    "/api/articles/like/{id}": {
        put: like
    },
    "/api/articles/note/{id}": {
        get: note
    },
    "/api/articles/comment/state/{id}": {
        get: nbre
    }
}

module.exports = {
    getAll,
}
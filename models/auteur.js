const mongoose = require('mongoose')
const joi = require('joi')

const user = mongoose.model('User', new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
        min: 3,
        max: 20
    },
    lastname: {
        type: String,
        required: true,
        min: 3,
        max: 20
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true,
        minlength: 6,
        maxlength: 1024
    }
})
)

//Valid user check function
const validateUser = (user) => {
    const schema = joi.object({
        firstname: joi.string().min(3).max(20).required(),
        lastname: joi.string().min(3).max(20).required(),
        email: joi.string().required(),
        password: joi.string().min(6).max(255).required()
    })

    return schema.validate(user)
}

module.exports = {User: user, validateUser: validateUser}
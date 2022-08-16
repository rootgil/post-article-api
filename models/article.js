const mongoose = require('mongoose')

const article = mongoose.model('Article',new mongoose.Schema({
    titre: {
        type: String,
        require: true
    },
    contenu: {
        type: String,
        //max: 500
    },
    medias: {
        //Some url who will be pickle by the client
        type: Array,
        default: []
    },
    date: {
        type: Date
    },
    id_auteur: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Auteur"
    },
    likes: {
        type: Array,
        default: []
    },
    comments: {
        type: Array,
        default: []
    }
})
)

module.exports = article
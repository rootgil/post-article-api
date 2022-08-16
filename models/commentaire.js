const mongoose = require('mongoose')

//Explication
const notes = mongoose.model('Commentaire', new mongoose.Schema({
    id_auteur: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    id_article: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    commentaire: {
        type: String,
        max: 500,
        required: true
    }
}))
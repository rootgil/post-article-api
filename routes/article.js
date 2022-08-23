const express = require('express')
const redis = require('redis')

const router = express.Router()

const Article = require('../models/article')
const  auth = require('../middleware/check')

// Redis management
const client = redis.createClient(6379)
client.connect()

//Post an article
router.post('/', auth, async (req, res) => {
    try{
        let article = req.body

        if(article.titre === "" || article.contenu === "")
            return res.status(400).send("Article posted failed")

        article = new Article({
            titre: article.titre,
            contenu: article.contenu,
            medias: article.media,
            date: new Date(),
            note: undefined,
            id_auteur: req.user._id
        })

        await article.save()
        res.send('Article posted successfully')
    }catch(err){
        res.status(500).json(err);
    }
})

//get all post
router.get('/all', auth, async (req, res) => {
    return res.json(await Article.find({}))
})

//Do comment
router.put('/comment/:id', auth, async (req, res) => {
    try{
        const post = await Article.findById(req.params.id)

        if(!post)
            return res.status(400).send('Bad information')

        await post.updateOne({ $push: {
            comments:
            {
                id_user: req.user._id,
                comment: req.body.infos
            }
        }});

        await client.incr(req.params.id)

        return res.json('Comment was well added')
    }catch(err){
        res.status(500).json(err)
    }
})

const sendResponse = (id, nbre) => {
    return {
        fromCache: true,
        data: nbre
    }
}

// cache for comment
const commentCache = async (req, res, next) => {
    const { id } = req.params

    const commentNbre = await client.get(id)

    if(commentNbre !== null) {
        res.send(sendResponse(id, commentNbre))
    } else {
        next()
    }
}

router.get('/comment/state/:id', commentCache, async (req, res) => {
    try {
        const { id } = req.params

        const article = await Article.findById(id)

        const n = article.comments.length

        await client.set(id, n, {
            EX: 180
        })

        res.send({
            fromCache: false,
            data: n
        })
    } catch (err) {
        console.log(err)
        res.status(500)
    }
})

//delete self post
router.delete('/:id', auth, async (req, res) => {
    try{
        const post = await Article.findById(req.params.id)

        if(!post)
            res.status(400).send("Post don't exist")

        if(post.id_auteur == req.user._id){
            await post.deleteOne()*
            res.json('The post has been deleted')
        }else{
            res.json("The post can been deleted by only the author")
        }
    }catch(err){
        res.status(500).json(err)
    }

})

//like an article
router.put('/like/:id', auth, async (req, res) => {
    try{
        let already = false
        if(!Number.isInteger(req.body.note))
            return res.status(400).json('invalid parameters')

        if(req.body.note <= 0 || req.body.note > 5)
            return res.status(400).json('invalid parameters')

        const post = await Article.findById(req.params.id)

        if(!post)
            return res.status(400).send('Internal error')

        already = post.likes.some((val) => {
            return val.id_user == req.user._id
        })

        if(!already){
            await post.updateOne({ $push: {
                likes:
                {
                    id_user: req.user._id,
                    note: req.body.note
                }
            } });
        }
        else{
            res.status(400).json('You have already liked')
        }

        return res.json('Liked successfully')
    }catch(err){
        res.status(500).json(err)
    }
})

//get self article
router.get('/', auth, async (req, res) => {
    try{
        const post = await Article.find({id_auteur: req.user._id})
        if(!post)
            return res.status(400).json("You don't have post for the moment")

        return res.json(post)
    }catch(err){
        res.status(500).json(err)
    }
})

//get some article
router.get('/user/', auth, async (req, res) => {
    try{
        const post = await Article.find({id_auteur: req.query.id})
        if(!post)
            return res.status(400).json("No post for this user")

        return res.json(post)
    }catch(err){
        res.status(500).json(err)
    }
})

//get some post
router.get('/:id', auth, async (req, res) => {
    try{
        const post = await Article.findById(req.params.id)
        if(!post)
            return res.status(400).json("This post don't exist")

        return res.json(post)
    }catch(err){
        res.status(500).json(err)
    }
})

//get the post note
router.get('/note/:id', auth, async (req, res) => {
    try{
        const post = await Article.findById(req.params.id)

        if(!post)
            res.status(400).send("This post don't exist")

        let long = post.likes.length

        if(long == 0)
            return res.json({
                note: undefined
            })

        let notes = 0

        for(let i=0; i < long; i++){
            notes += post.likes[i].note
        }
        return res.json({
            note: parseInt(notes/long)
        })

    }catch(err){
        res.status(500).json(err)
    }
})

module.exports = router
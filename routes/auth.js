const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const generateToken = (user) => {
    return jwt.sign(user.toObject(), process.env.ACCESS_TOKEN_SECRET, {expiresIn: '180000s'})
}

const { User } = require('../models/auteur')

router.post('/', async (req, res) => {
    try{
        const user = await User.findOne({email: req.body.email})

        if(!user)
            return res.status(400).send('Invalid credential')

        const validPass = await bcrypt.compareSync(req.body.password, user.password, function(err, res) {
            if(err) {
                console.log('Comparaison error: ', err);
            }
        })

        if(!validPass){
            return res.status(400).send('Incorrect email or password')
        }

        const token = generateToken(user)
        return res.cookie({"token":token}).json({
            success:true,
            message:'LoggedIn Successfully',
            token: token
        })
    }catch(err){
        res.status(500).json(err)
    }
})

module.exports = router;
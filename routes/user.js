const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')

const {User, validateUser} = require('../models/auteur')

router.post('/', async (req, res) => {
    try{
        const { error } = validateUser(req.body)

        if(error)
            return res.status(400).send(error.details[0].message)

        let user = await User.findOne({email: req.body.email})

        if(user)
            return res.status(400).send('This user is already exist')
        else{
            user = new User({
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                email: req.body.email,
                password: req.body.password
            })

            const salt = await bcrypt.genSalt(10)
            user.password = await bcrypt.hash(user.password, salt)
            await user.save()
            res.json(user)
        }
    }catch(err){
        res.status(500).json(err)
    }
})


module.exports = router;
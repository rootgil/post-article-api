const jwt = require('jsonwebtoken')

const authenticate = (req, res, next) => {

    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]

    if(!token){
        console.log("Tokenisation ...")
        return res.sendStatus(401)
    }
    /*
    const token = req.cookies

    if(!token){
        console.log("Tokenisation ...")
        return next('Please login to access the data');
    }
    */
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        console.log("Verfication ...")
        if(err){
            return res.sendStatus(401)
        }
        req.user = user;
        next();
    })
}

module.exports = authenticate
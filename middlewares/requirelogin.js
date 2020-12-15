const mongoose = require("mongoose")
const jwt = require("jsonwebtoken")
const User = mongoose.model("User")

require('dotenv').config()

module.exports = (req, res, next) => {
    const {authorization} = req.headers

    if(!authorization) {
        return res.status(401)
    }

    const token = authorization.replace("Bearer ", "")
    jwt.verify(token, process.env.JWTTOKEN, (err, payload)=> {
        if(err) {
            return res.status(401).json({error: "Please log in"})
        }
        const {_id} = payload
        User.findById(_id).then(userdata => {
            req.user = userdata
            next()
        })
    })
}
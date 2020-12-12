const express = require("express")
const router = express.Router()
const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
const User = mongoose.model("User")

require('dotenv').config()


router.post("/signup", (req, res) => {

    const {username, email, password, secondPassword } = req.body

    while (!username || !email || !password || !secondPassword) {
        res.status(422).json({error: "Please enter all of the fields"})
    }

    while (!(password === secondPassword)){
        res.status(422).json({error: "Passwords do not match"})
    }

    User.findOne({email:email}).then((savedUser)=> {

        if(savedUser) {
            res.status(422).json({error: "user already exists, log in here"})
        } 

        User.findOne({username:username}).then((savedUser) => {

            if(savedUser) {
                res.status(422).json({error: "user already exists, log in here"})
            } 
            //Crypt the password
            bcrypt.hash(password, 18).then(hashedpassword=> {
                //Create a new instance of User, dont worry about hashed password, bcrypt should handle it.
                const user = new User({
                    username,
                    email,
                    password:hashedpassword
                })

                //Adds this user to the MongoDB database
                User.save().then(user=> {
                    res.json({message:"saved"})
                })
                .catch((err) => {
                    console.log(err)
                })
            })
        })
    })
})

router.post("/signin", (req, res) => {
    const {username, password} = req.body

    while(!username || !password) {
        res.status(422).json({error: "add all of the fields please"})
    }

    User.findOne({username:username}).then(theUser => {
        if(!theUser) {
            return res.status(422).json({error: "Invalid email or password, please sign up!"})
        }
        bcrypt.compare(password, theUser.password).then(match => {
            if(match == true) {
                const token = jwt.sign({_id:theUser._id}, process.env.JWTTOKEN)
                const {_id, username, email} = savedUser
                res.json({token:token, user:{_id, username, email}})


            } else {
                return res.status(422).json({error: "Invalid email or password"})
            }
        }).catch((err)=> console.log(err))
    }).catch((err) => console.log("Its either that email dont exist, or the following error: ", err))
})

module.exports = router
const { default: Axios } = require("axios")
const express = require("express")
const router = express.Router()
const mongoose = require("mongoose")
const { post } = require("./authentication")
const Account = mongoose.model("Account")

require('dotenv').config()


router.post("/newAddy", (req, res) => {
    const user = req.user
     const {nickName} = req.body

    const newAcc = Axios.get('https://api.blockcypher.com/v1/btc/test3/addrs')
    //private, public, address, wif need to be added to schema

    const account = new Account ({
        privateKey:newAcc.data.private,
        publicKey:newAcc.data.public,
        address:newAcc.data.address,
        WIF:newAcc.data.wif,
        belongsTo:req.user
    })

    post.save().then(res => {
        res.json({post:res})
    }).catch(err=> {
        console.log(err)
    })
})

router.get("/myAccounts", (req, res)=>{
    Account.find({belongsTo:req.user._id}).populate("belongsTo", "username _id").then((allAccounts)=> {
        res.json({allAccounts})
    }).catch(err => console.log(err))
})
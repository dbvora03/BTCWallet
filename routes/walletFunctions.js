
const express = require("express")
const router = express.Router()

const mongoose = require("mongoose")
const Account = mongoose.model("Account")
const Transaction = mongoose.model("Transaction")

const requirelogin = require("../middlewares/requirelogin")
const qr = require("qrcode")
const nodemailer = require("nodemailer")
const sendGridTransport = require("nodemailer-sendgrid-transport")
const { default: Axios } = require("axios")
const fs = require("fs")
const {promisify} = require("util")
const { post, all } = require("./authentication")
const { json } = require("express")
const readFile = promisify(fs.readFile)


require('dotenv').config()

const transporter = nodemailer.createTransport(sendGridTransport({
    auth:{
        api_key:process.env.SENDGRID_TOKEN
    }
}))

//REMEMBER!!!! All transactions are in satoshis
//1 BTC = 100,000,000 Satoshis
// 1 Satoshi = 0.000000001 BTC

router.post("/newAddy", requirelogin, (req, res) => {
    const user = req.user
    const {nickName} = req.body

    const newAcc = Axios.get('https://api.blockcypher.com/v1/btc/test3/addrs')
    //private, public, address, wif need to be added to schema

    const account = new Account ({
        nick:nickName,
        privateKey:newAcc.data.private,
        publicKey:newAcc.data.public,
        address:newAcc.data.address,
        WIF:newAcc.data.wif,
        belongsTo:req.user
    })

    account.save().then(res => {
        res.json({account:res})
    }).catch(err=> {
        console.log(err)
    })
})

router.get("/myWallet", requirelogin, (req, res)=>{
    Account.find({belongsTo:req.user._id}).populate("belongsTo", "username _id").then((allAccounts)=> {
        res.json({allAccounts})
    }).catch(err => console.log(err))
})

router.get("/balance", requirelogin, (req, res)=> {
    const {address} = req.body
    Axios.get(`https://api.blockcypher.com/v1/btc/test3/addrs/${address}/balance`).then(result=> {
        res.json({result})
    })
})

router.get("/alltrans", requirelogin, (req, res)=> {

    Transaction.find({sender:req.user._id}).populate("amount", "reciever").then(allTransactions=> {
        res.json(allTransactions)
    }).catch(err=> {
        console.log(err)
    })
   
})


router.get("/getQRCode/:id", requirelogin, (req, res) => {
    const {address} = req.params.id
    
    qr.toDataURL(address).then((result)=> {
        console.log(result)
        res.json(result)
    }).catch((err)=> {
        console.log(err)
    })
})

router.post("/transfer", requirelogin, (req, res)=> {
    const {inputAddy, outputAddy, amount} = req.body

    Account.findOne({
        address:outputAddy,
        belongsTo: req.user._id
    }).limit(1).exec(err=> {
        if(err) {
            res.json({"error": "That account does not belong to you!!"})
            return 
        }
    })

    var newtx = {
        inputs: [{addresses: [`${inputAddy}`]}],
        outputs: [{addresses: [`${outputAddy}`], value:amount}]
    }

})



router.post("/transaction", requirelogin, (req, res)=> {
    const {inputAddy, outputAddy, amount} = req.body

    var newtx = {
        inputs: [{addresses: [`${inputAddy}`]}],
        outputs: [{addresses: [`${outputAddy}`], value:amount}]
    }

    Axios.post('https://api.blockcypher.com/v1/bcy/test/txs/new', JSON.stringify(newtx)).then(() => {
        const transaction = new Transaction({
            sender:req.user,
            reciever:outputAddy,
            amount:amount,
            date: new Date()
        })
        transaction.save().then(res => {
            res.json({message: "Transaction completed successfully, check your email for a reciept"})

            transporter.sendMail({
                to:req.user.email,
                from:"no-reply@BTCWallet.com",
                subject:"Recent transaction information",
                html: await readFile('./emailTemplate.html', "utf8")
            })

            res.json({account:res})
        }).catch(err=> {
            console.log(err)
        })
    }).catch(err=> {
        console.log(err)
    })
})
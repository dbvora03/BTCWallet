const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema.Types


const transactionSchema = new mongoose.Schema({
    sender:{
        type:ObjectId,
        ref:"User"
    },
    reciever:{
        type:String,
        required:true
    },
    amount:{
        type:Number,
        required:true
    },
    date: {
        type: Date
    }
}, {timestamps:true})

mongoose.model("Transaction",transactionSchema)
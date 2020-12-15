const mongoose = require("mongoose")
const {ObjectID} = mongoose.Schema.Types

const accountSchema = new mongoose.Schema({

    privateKey: {
        type: String,
        required:true
    },
    publicKey: {
        type: String,
        required:true
    },
    address: {
        type: String,
        required:true
    },
    WIF: {
        type: String,
        required:true
    },
    belongsTo: {
        type:ObjectID,
        ref:"User"
    }
})

mongoose.model("Account", accountSchema)
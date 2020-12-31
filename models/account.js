const mongoose = require("mongoose")
const {ObjectID} = mongoose.Schema.Types

const accountSchema = new mongoose.Schema({
    nick: {
        type: String,
        required:true
    },
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

const Account = mongoose.model("Account", accountSchema)


module.exports = Account
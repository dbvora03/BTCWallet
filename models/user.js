const mongoose = require("mongoose")
const {ObjectId} = mongoose.Schema.Types

const userSchema = new mongoose.Schema({

    username: {
        type: String,
        required:true
    },
    email: {
        type: String,
        required:true
    },
    password: {
        type: String,
        required:true
    },
    transHistory:[{type:ObjectId, ref:"Transaction"}],
    accounts:[{type:ObjectId, ref:"Account"}]
},{timestamps: true})

const User = mongoose.model("User", userSchema)

module.exports = User
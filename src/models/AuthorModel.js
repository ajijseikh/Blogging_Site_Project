const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
    fname: {
        type: String,
        required: true
        
    },
    lname: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true,
        enum: ["Mr", "Mrs", "Miss"]
    },
    email: {
        type: String,                                           
        lowercase: true,
        unique: true,
        required: true,   
    },
    password: {
        type: String,
        required: true
    },



}, { timestamps: true });


module.exports = mongoose.model('Author', AuthorSchema)
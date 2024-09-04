const mongoose = require('mongoose');
const { v4: getID } = require("uuid");
const { Schema } = mongoose;

const postSchema = new Schema({
    id: {
        type: String,
        default: getID,
    },
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    text: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    likes: {
        type: Number,
        required: true,
    },
}); 


const blogPosts = mongoose.model('Posts', postSchema);
module.exports = blogPosts;

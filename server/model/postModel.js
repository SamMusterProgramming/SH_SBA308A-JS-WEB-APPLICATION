const { Int32 } = require('mongodb');
const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    link:String,
    description:String,
    user_id: Number 
})

const postModel = mongoose.model("posts",postSchema);

module.exports = postModel;
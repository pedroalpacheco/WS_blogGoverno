const mongoose  = require('mongoose');

const blog = mongoose.model(
    'blog',
    mongoose.Schema({
        titulo:String,
        linkimg:String,
        datapublicacao:String,
        texto:String
    })
);
module.exports = blog;
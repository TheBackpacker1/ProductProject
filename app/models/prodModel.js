const { type } = require("express/lib/response");
const mongoose = require("mongoose");

const AppSchema = mongoose.Schema({

    name : { 

type:String, 
required:true 

    } , 
    description :{
        type:String,
        required:true
    },
    price : { 
        type:String , 
        required:true
    } ,
    images: {
        type: [String], 
        required: false // Optional, you can make it required if necessary
    }




},


{
timestamps:true


});

module.exports = mongoose.model("Product", AppSchema);
const {
    type
} = require("express/lib/response")
const mongoose = require("mongoose")




const CommandeSchema = mongoose.Schema({
    date: {

        type: Date,
        required: true,
        default: Date.now,

    },

    client: {
        type: String,
        required: true
    },

    products: [


        {

           product : { 
            type : mongoose.Schema.Types.ObjectId , 
            ref: "Product", 
            required:true 

           } , 

           quantity: {
                type: Number,
                required: true,
                min: 1 
            }


        }


    ]





}
,
{
    timestamps: true
}


)

module.exports = mongoose.model("Command", CommandeSchema);

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const serviceSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    description:String,
    category:{
        type:String,
        required:true
    },
    images:[
        {
            type:String,
            ref:"Review"
        }
    ]
});


const Service = mongoose.model("Service",serviceSchema);

module.exports = Service;
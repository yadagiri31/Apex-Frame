const mongoose = require("mongoose");
main().then(()=>{
    console.log("mongodb connected");
}).catch((err)=>{
    console.log(err);
})
async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/apexframe")
}

const Review = require('./models/Review.js');



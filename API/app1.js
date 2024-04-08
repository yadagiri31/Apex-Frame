const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const session = require('express-session');
const passport = require("passport");
const localStrategy = require("passport-local");

const ExpressError = require("./utils/ExpressError.js");

const app = express();

// for authorization

const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs');
const asyncHandler = require('express-async-handler');

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());


// importing models
const User = require('./models/User.js');
const Service = require('./models/Services');
const Review = require('./models/Review.js');

// Routers
const userRouter = require('./routes/userRouter.js');
const reviewRouter = require('./routes/reviewRouter.js')

// Session configuration
const sessionOptions = {
    secret: 'mysupersecretstring',
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days in milliseconds
        httpOnly: true
    }
};


// Middleware to check if user is authenticated
const protect = asyncHandler(async(req,res,next)=>{
    let token;
    if(req.headers.authorization && req.headers.authorization.startswith('Bearer')){
        try{
            // get token from header
            token = req.headers.authorization.split(' ')[1];
            const decoded = jwt.verify(token,"abc123")

            // get user from token
            req.user = await User.findById(decoded.id).select('-password');

            next();
        }catch(err){
            console.log(error);
            res.status(401).json({success:false});

        }
    }

    if(!token){
        res.status(401).json({success:false});
    
    }
})
// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/apexframe")
    .then(() => {
        console.log("mongodb connected");
    })
    .catch((err) => {
        console.log(err);
    });



// middlewares for routers
app.use("/",userRouter);
app.use("/review",reviewRouter);
// Routes
app.get("/", async (req, res) => {
    try {
        const reviews = await Review.find();
        res.status(200).json(reviews);
    } catch (error) {
        console.error("Error fetching reviews:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

// app.post("/signup", asyncHandler(async (req, res) => {
//     const { username, name, email, password } = req.body;

//     if(!name || !email|| !password){
//         return res.status(400).send({success:false});
//     }
//     // check if user exists
//     const usernameExists = await User.findOne({username});
//     const emailExists = await User.findOne({email})
//     if(usernameExists){
//         return res.status(400).json({success:false,message:"username already exists"});

//     }
//     if(emailExists){
//         return res.status(400).json({success:false,message:"email already exists"});
//     }

//     // Hash password
//     const salt = await bcrypt.genSalt(10);
//     const hashedPassword = await bcrypt.hash(password,salt);
    
//     // create user
//     try{
//         const user = await User.create({
//             name,
//             email,
//             username,
//             password:hashedPassword
//         })
//         return res.status(201).json({
//             success:true,
//             _id:user.id,
//             username:user.username,
//             email:user.email,
//             token:generateToken(user._id)
//         })
//     }catch(err){
//         return res.status(400).json({success:false})
//     }
 
// }));

// app.post("/login", asyncHandler(async(req, res) => {
//     const {username,password} = req.body;
//     // checking for username
//     try{
//         const user = await User.findOne({username});
//         console.log(user);
//         const comparepasswords = await bcrypt.compare(password,user.password);
//         console.log(comparepasswords);
//         if(comparepasswords){
//             console.log("iam done");
//             return res.status(200).json({
//                 success:true,
//                 _id:user.id,
//                 username:user.username,
//                 email:user.email,
//                 token:generateToken(user._id)
//             })
//         }
//         else{
//             console.log("iam here also")
//             res.status(400).json({success:false})
//         }

//     }catch(err){
//         console.log(err);
//         res.status(400).json({success:false})
//     }
       
// }));

app.get("/logout", asyncHandler(async(req, res) => {
    req.logout();
    console.log("User logged out");
    res.status(200).json({ success: true, message: "Logged out successfully" });
}));

app.get("/services",protect,async(req,res)=>{
    try{
        res.status(201).json({success:true});
    }
    catch(err){
        res.status(400).json({success:false})
    }
})

app.get("/service/:service_name", async (req, res) => {
    const { service_name } = req.params;
    let val = 1;
    if(service_name==="fashion-photography"){
        val = 2;
    }
    try {
       
        const document1 = await Service.find({ category: service_name });
       
        res.status(201).json({success:true,val:val,document:document1});
        
    } catch (error) {
        
        console.error("Error:", error);
        res.status(500).json({ success: false, error: "Internal Server Error" });
    }
});


// generate token




function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    } else {
        console.log("User is not authenticated");
        res.status(401).json({ success: false, error: "Unauthorized" });
    }
}

// Error handling
app.all("*", (req, res, next) => {
    next(new ExpressError(404, "Page not found"));
});

app.use((err, req, res, next) => {
    let { status = 500, message = "Something went wrong" } = err;
    res.status(status).send(message);
});

// Start server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

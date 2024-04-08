const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();

// support parsing of application/json type post data
app.use(bodyParser.json());

//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({
    credentials:true
}));

app.options('*', cors())

// sessions
const session = require('express-session');

// importing utils
const ExpressError = require("./utils/ExpressError.js");
// const isLoggedIn = require('./middleware.js')

// importing models
const Service = require('./models/Services');

const User = require('./models/User.js');
// passport
const passport =  require("passport");
const localStrategy = require("passport-local");


// connecting to mongodb
main().then(()=>{
    console.log("mongodb connected");
}).catch((err)=>{
    console.log(err);
})
async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/apexframe")
}


const sessionOptions = {
    secret: 'mysupersecretstring',
    resave: false,
    saveUninitialized: true,
    cookie: {
        expires:Date.now() + 7 *24*60*60*1000,
        maxAge:7 *24*60*60*1000,
        httpOnly:true
    }
}


app.get("/",(req,res)=>{
    res.send("Hello!");
})


app.use(require('cookie-parser')());
app.use(session(sessionOptions));
// after session
app.use(passport.initialize());
app.use(passport.session()); 
passport.use(new localStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


// signup
app.get("/signup",(req,res)=>{
    res.status(200).send({});
})
app.post("/signup",async (req,res)=>{
    try{
        const {username,name,email} =req.body; 
        const {password} = req.body;
        const registeredUser = await User.register({username,name,email},password);
        req.login(registeredUser,function(err){
            if(err){
                return next(err);
            }
            res.status(200).json({success:true})
        })
    }catch(e){
        res.status(401).json({success:false});
    }
    
    result.then(()=>{
        return res.status(200).send({success:true});
    }).catch((err)=>{
        res.status(400).send({success:false})
    })
})


app.get("/check-auth", (req, res) => {
    if (req.isAuthenticated()) {
        // User is authenticated
        console.log(req.user); // Print user details
        res.send("user authenticated")
    } else {
        // User is not authenticated
        console.log("User is not authenticated");
        res.redirect("/");
    }
});


// login
app.get("/login",(req,res)=>{
    res.status(200).json({});
})
app.post("/login",
    passport.authenticate("local", { failureRedirect: '/login' }), // Authentication middleware
    (req, res) => {
        // Successful authentication
        req.login(req.user, (err) => {
            if (err) {
                return res.status(500).json({ success: false, error: "Error logging in" });
            }
            console.log(req.user);
            res.status(200).json({ success: true, user: req.user }); // Send user data
        });
    }
);


// get requests of service
app.get("/services",(req,res)=>{
    try{
        if (req.isAuthenticated()) {
            return next();
        } else {
            console.log(req.user);
            console.log("User is not authenticated");
            return res.status(401).json({ success: false, error: "Unauthorized" });
        }
        return res.status(200).json({success:true});
    }
    catch(error){
        return res.status(500).json({success:false});
    }
})
app.get("/service/:service_name",isLoggedIn,async (req,res)=>{
    const {service_name} = req.params;
    try {
        const document1 = await Service.find({ category: service_name });
        console.log("Authenticated user:", req.user);
        console.log("Document:", document1);
        res.status(200).json({ success: true, document1 });
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ success: false, error: "Internal Server Error" });
    }
});


app.get("/logout",(req,res,next)=>{
    req.logout((err)=>{
        if(err){
            next(err);
        }
    })
    console.log("you were logged out");
})


// errror handling
app.all("*",(req,res,next)=>{
    next(new ExpressError(404,"page not found"));
});

app.use((err,req,res,next)=>{
    let {status=500,message="something went wrong"} = err;
    res.status(status).send(message);
})

// Middleware to check if user is authenticated
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    } else {
        console.log(req.user);
        console.log("User is not authenticated");
        res.status(401).json({ success: false, error: "Unauthorized" });
    }
}


app.listen(8080,()=>{
    console.log("port 8080 is running!");
})

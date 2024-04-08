module.exports.isLoggedIn = (req,res,next)=>{
    if (req.isAuthenticated()) {
        return next();
    } else {
        console.log("User is not authenticated");
        return res.status(401).json({ success: false, error: "Unauthorized" });
    }
}
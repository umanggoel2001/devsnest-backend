const check=(req,res,next)=>{
    if(res.session.User.role==="super-admin"){
        next();
    }
    else{
        res.status(401).send("Needs to be super Admin");
    }
}
module.exports=check;
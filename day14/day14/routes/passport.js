const router = require("express").Router();
//bring the user registration

const{
    userAuth,
    userLogin,
    checkRole,
    userRegister,
    serializeUser
} = require("../utils/Auth");
 
//user registration route

router.post("/regsiter-user",async (req,res)=>{
    await userRegister(req.body,"user",res);

});

//admin registation route
router.post("/regsiter-admin",async (req,res)=>{
    await userRegister(req.body,"admin",res);

});

//super-admin
router.post("/regsiter-super-admin",async (req,res)=>{
    await userRegister(req.body,"superadmin",res);

}); 
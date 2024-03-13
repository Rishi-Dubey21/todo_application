const { Router } = require("express");
const router=Router();
const zod=require("zod");
const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken");
const { user } = require("../connection/conn");
const JWT_SECRET="12345";
const email_veri=zod.string().email();
const pass_veri=zod.string().min(6);


router.post("/register",async (req,res)=>{
    const email=req.body.email;
    const username=req.body.username;
    const password=req.body.password;
    
    const a=email_veri.safeParse(email);
    const b=pass_veri.safeParse(password);
    if(a.success === false || b.success === false){
        res.send("Wrong credentials")
        return;
    }
    user.findOne({
        email
    }).then((val)=>{
        if(val) res.json({msg:"User already exist"});
        else{
            user.create({
                email,
                username,
                password
            }).then(()=>{
                res.json({msg:"User created successfully"})
            })
        }
    })
})

router.post("/signin",async (req,res)=>{
    const email=req.body.email;
    const password=req.body.password;
    const val=await user.findOne({
        email:email,
        password:password
    })
    if(val){
        const token=jwt.sign({
            email
        },JWT_SECRET)
        res.json({token});
    }else{
        res.json({msg:"Kindly register first"});
    }
})

module.exports=router;
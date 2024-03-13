const { Router } = require("express");
const router=Router();
const jwt=require("jsonwebtoken");
const JWT_SECRET="12345";
const { list,user } = require("../connection/conn");

router.post("/addTask",async (req,res)=>{
    const title=req.body.title;
    const body=req.body.body;
    const words=(req.headers.authorization).split(" ");
    const token=words[1];
    const decoded=jwt.verify(token,JWT_SECRET);
    const user_ref=await user.findOne({
        email:decoded.email
    })
    if(user_ref){
        const added_list=await list.create({
            title,
            body,
            user:user_ref
        })
        user_ref.updateOne({
            
            "$push":{
                List:added_list
            }
            
            
            //List:added_list
        }).then(()=>{
            res.json({msg:"Todo created successfully"})
        })
    }else{
        res.json({msg:"There is some issue"});
    }
})



router.put("/updateTask/:id",async (req,res)=>{
    const title=req.body.title;
    const body=req.body.body;
    const words=(req.headers.authorization).split(" ");
    const token=words[1];
    const decoded=jwt.verify(token,JWT_SECRET);
    const user_ref=await user.findOne({
        email:decoded.email
    })
    if(user_ref){
        await list.findByIdAndUpdate(
            req.params.id,{
                title,
                body
            }
        )
        res.json({msg:"The todo is updated"});
    }else{
        res.json({msg:"There is some issue"});
    }
})




router.delete("/deleteTask/:id",async (req,res)=>{
    const words=(req.headers.authorization).split(" ");
    const token=words[1];
    const decoded=jwt.verify(token,JWT_SECRET);
    const user_ref=await user.findOneAndUpdate({
        email:decoded.email,
        "$pull":{
            List:req.params.id
        }
    })
    if(user_ref){
        await list.findByIdAndDelete(
            req.params.id
        )
        res.json({msg:"The todo is deleted"});
    }else{
        res.json({msg:"There is some issue"});
    }
})




router.get("/getTasks",async (req,res)=>{
    const words=(req.headers.authorization).split(" ");
    const token=words[1];
    const decoded=jwt.verify(token,JWT_SECRET);
    const user_ref=await user.findOne({
        email:decoded.email,
    })
    if(user_ref){
        const ans=await list.find({
            user:user_ref._id
        })
        if(ans.length === 0) res.json({msg:"No task created"});
        else res.json({ans});
    }else{
        res.json({msg:"There is some issue"});
    }
})

module.exports=router;
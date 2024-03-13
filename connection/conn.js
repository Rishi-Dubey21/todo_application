const mongoose = require("mongoose");

mongoose.connect("")

const ListSchema= new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    body:{
        type:String,
        required:true
    },
    user:[{
        type:mongoose.Types.ObjectId,
        ref:'User'
    }]    
})

const UserSchema=new mongoose.Schema({
    email:{
        type:String,
        unique:true,
        required:true
    },
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    List:[{
        type:mongoose.Types.ObjectId,
        ref:'List',
    }]
})

const list=mongoose.model('List',ListSchema);
const user=mongoose.model('User',UserSchema)
module.exports = {
    list,
    user
};
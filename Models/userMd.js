import mongoose from 'mongoose'

const userSchema=mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        match:/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/
    },
    role:{
    type:String,
    default:'user',
    enum:['user','admin']
    }
},{timestamps:true})
const User=mongoose.model('User',userSchema)
export default User
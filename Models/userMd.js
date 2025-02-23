import mongoose from 'mongoose'

const userSchema=mongoose.Schema({
    username:{
        type:String,
        required:[true,'username is required'],
        unique:[true,'username is not unique']
    },
    password:{
        type:String,
        required:[true,'password is required']
    },
  
    password:{
        type:String,
        required:[true,'password is required' ], 
    },
    email:{
        type:String,
        match:/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/,
        unique:[true,'user name must be unique']
    },
    role:{
    type:String,
    default:'user',
    enum:['user','admin']
    }
},{timestamps:true})
const User=mongoose.model('users',userSchema)
export default User
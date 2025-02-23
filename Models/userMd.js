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
    email:{
        type:String,
        unique:[true,'email is not unique'],
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
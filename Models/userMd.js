import mongoose from 'mongoose'

const userSchema=mongoose.Schema({
    username:{
        type:String,
        required:[true,'password is required'],
        unique:[true,'user name must be unique'],
    },
    password:{
        type:String,
        required:[true,'password is required' ], 
    },
    email:{
        type:String,
        unique:[true,'email is already in use'],
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
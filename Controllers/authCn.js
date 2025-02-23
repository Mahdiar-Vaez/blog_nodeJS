import User from "../Models/userMd.js"
import catchAsync from '../Utils/catchAsync.js'
import HandleERROR from "../Utils/handleError.js"
import bcryptjs from 'bcryptjs'
import jwt from 'jsonwebtoken'
const Login=catchAsync(async(req,res,next)=>{
    const {username=null,password=null}=req.body
    if(!username || !password){
        return next(new HandleERROR('username and password required',400))
    }
    const user=await User.findOne({username})
    if(!user){
        return next(new HandleERROR('invalid credentials',401))
    }
    const checkPass=bcryptjs.compareSync(password,user.password)
    if(!checkPass){
        next(new HandleERROR('password is incorrect',400))
    }
    const token=jwt.sign({id:user._id,role:user.role},process.env.SECRET_JWT)
    return res.status(200).json({
        success:true,
        
        data:{token,username},
        message:'login successfully'
    })

})
const Register=catchAsync(async(req,res,next)=>{
    const {password=null,role=null,...others}=req.body
    const passReg=new RegExp(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/)
    if(!passReg.test(password)){
        return next(new HandleERROR('password must contain at least 8 characters, one uppercase letter, one lowercase letter and one number',400))
    }
    const hashPassword=bcryptjs.hashSync(password,10)
    const user=User.create({...others,password:hashPassword})
    const token=jwt.sign({id:user._id,role:user.role},process.env.SECRET_JWT)
    return res.status(200).json({
        success:true,
        data:{token,username:user.username},
        message:'registration successfully'
    })

})

export {Login,Register}
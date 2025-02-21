import express from 'express'
import { Login, Register } from '../Controllers/authCn.js'

const authRouter=express.Router()
authRouter.route('/',Login)
authRouter.route('/register',Register)



export default authRouter
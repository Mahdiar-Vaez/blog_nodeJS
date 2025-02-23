import express from 'express'
import { Login, Register } from '../Controllers/authCn.js'

const authRouter=express.Router()
authRouter.route('/').post(Login)
authRouter.route('/register').post(Register)



export default authRouter
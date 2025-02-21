import express from 'express'
import {fileURLToPath} from 'url'
import path from 'path'
import {authRouter, categoryRouter, commentRouter, postRouter, userRouter} from './Routes/import.js'
import morgan from 'morgan'
import HandleERROR from './Utils/handleError.js'
import catchError from './Utils/catchError.js'
const __filename=fileURLToPath(import.meta.url)
export const __dirname=path.dirname(__filename)
const app = express()
app.use(morgan('dev'))
app.use(express.json())
app.use(express.static('Public'))
app.use('/api/category',categoryRouter)
app.use('/api/user',userRouter)
app.use('api/comment',commentRouter)
app.use('/api/auth',authRouter)
app.use('/api/post',postRouter)






app.use('*',(req,res,next)=>{
    next(new HandleERROR('route not found',404))
})


app.use(catchError)

export default app
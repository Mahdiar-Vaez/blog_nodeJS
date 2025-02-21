import app,{__dirname} from "./app.js";
import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config({path:`${__dirname}/config.env`})
mongoose.connect(process.env.DATA_BASE).then(()=>{
    console.log('server is running')
}).catch(ERR=>console.log(ERR))

app.listen(process.env.PORT,()=>console.log(`server is running on port ${process.env.PORT}`))
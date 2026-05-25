import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import { connectDB } from './db/database.js'

dotenv.config()
const app = express()
app.use(cors({origin: "*"}))

const port = process.env.PORT || 4000

connectDB().then(()=> app.listen(port, ()=>{
        console.log(`Server is running at port ${port}`)
    }))


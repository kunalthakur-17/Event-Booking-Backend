import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'

dotenv.config()
const app = express()
app.use(cors({origin: "*"}))

const port = process.env.PORT || 4000

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
}) 
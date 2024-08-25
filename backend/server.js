import express from  'express'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import authRoutes from "./routes/authRoutes.js"
import messageRoutes from "./routes/messageRoutes.js"
import userRoutes from "./routes/userRoutes.js"
import { dbConnection } from './database/dbConnection.js';
import { app, server } from './socket/socket.js'

const PORT = process.env.PORT || 5000
// const app = express();

dotenv.config();
app.use(express.json())
app.use(cookieParser())

// app.get("/", (req, res) => {
//     res.send("hello world tmc")
// })

app.use("/api/auth", authRoutes)
app.use("/api/message", messageRoutes)
app.use("/api/users", userRoutes)

server.listen(PORT, () => {
    dbConnection();
    console.log(`Server is running on port ${PORT}`)
})


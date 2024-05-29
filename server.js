import express from "express"
import dontenv from "dotenv"
import connectdb from "./db/connection.js"
import router from "./route/web.js"
const app=express()
dontenv.config()
const port=process.env.PORT||'5000'
const database_url=process.env.DB_URL
connectdb(database_url)
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use('/',router)


app.listen(port,()=>{
    console.log(`server start at http://localhost:${port}`);
})
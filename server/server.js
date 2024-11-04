const express = require('express')
const cors = require('cors')
const connectDB = require('./db.js')
const postModel = require('./model/postModel.js')
// const userModel = require('./model/userModel.js')

const app = express();
app.use(express.json())
app.use(cors());
connectDB();


app.get("/posts",async(req,res)=>{
   try {
      console.log("I am here")
      const userPosts = await postModel.find({});
      res.status(200).json(userPosts)
   }catch(error)
   {
      console.log(error)
   }
  
})

app.listen(8080,()=>{
   console.log(8080)
})
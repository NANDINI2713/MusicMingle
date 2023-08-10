const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const bcrypt = require('bcrypt')
const user = require('./Register')
const e = require("express")
const { Await } = require("react-router-dom")
const url = 'mongodb+srv://music:music1234@cluster0.ddlivji.mongodb.net/?retryWrites=true&w=majority'

const app = express()
app.use(express.json())

app.use(express.urlencoded({extended: true}));
app.use(cors())

mongoose.connect(url).then(()=>{
    console.log('Connected to mongoose')
}).catch((e)=>{
    console.log("error")
})

app.listen(3002,()=>{
    console.log("BE started on port 3002")
})




app.post('/Register',async (req,res)=>{
    const {username,email,password}=req.body
            const User = new user({
                username,
                email,
                password
            });
            const mail = await user.findOne({ email });

            if (!mail) {
              User.save()
                .then(() => {
                    res.json({ success: true, message: 'User registered successfully' });
                })
                .catch((e) => {
                  console.log("Error adding a user", e);
                });
            } else {
                res.json({ success: false, message: 'Username already exists' });

            }
          });

    




app.post('/Login',async(req,res)=>{
    const {email,password}=req.body;
    const User = await user.findOne({email});

    if(!User)
    {
        console.log(res.msg)
        return res.status(404).json({msg: "Data not found"})
    }

    // const validPassword = await bcrypt.compare(password,User.password);
    if(password === User.password)
    {
        console.log("validPassword")
        return res.status(200).json({msg: "Logged in sucessfully"})
    }
    else
    {
        console.log(res.msg)
        console.log("Invalid")
        return res.status(500).json({msg: "Invalid credentials"})
    }
})

// app.get('/getUsers/:userId',(req,res)=>{
//     const userId = parseInt(req.params.userId);

//   const users = user.find()
//   .then(users => (users.id === userId))
//   .catch(err => res.json(err))

//   if (!users) {
//     return res.status(404).json({ message: 'User not found' });
//   }

//   res.json(user);
    // user.find()
    // .then(users => res.json(users))
    // .catch(err => res.json(err))
// })

app.get("/api/user/:userId", async (req, res) => {
    const userId = req.params.userId;
    try {
      const User = await user.findById(userId);
      res.json(User);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch user data." });
    }
  });
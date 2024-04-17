const express = require('express');
const app=express();
const path =require('path');
const session = require('express-session');
const cors=require('cors');
const cookieParser = require('cookie-parser');
require('dotenv').config({path:'./.env'});

const port =process.env.PORT;

const User=require('./model/user');

const auth=require('./routs/auth.js');
const cart=require('./routs/cart.js');
const payment=require('./routs/paymentroute.js');
const instance = require('./config/razorpay.js');



app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cors(
  {
    origin:["http://localhost:5173"],
    methods:["POST","GET"],
    credentials:true,
  }
));

app.use(cookieParser("secretcode"))

const sessionOption={
  secret: 'keyboard cat',
  resave: true,
  saveUninitialized: true,
  cookie: {
    expires:Date.now()+1000*60*60*24*3,
    maxAge: 1000*60*60*24*3,
    httpOnly:true,
  }
}



app.use(session(sessionOption));
app.get('/',(req,res)=>{
  res.json("Working");
})

app.use('/auth',auth);
app.use('/cart',cart);
app.use('/payment',payment);



app.listen(port,()=>{
    console.log("Port is Listening");
});


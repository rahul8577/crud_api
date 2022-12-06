const mongoose = require('mongoose');
const express=require('express');
const app=express();
app.use(express.json())
app.use(express.urlencoded({extended:true}))

///////////////////////////database connection//////////////////////////////

const sql="mongodb://localhost:27017/crudtest?directConnection=true&readPreference=primary";
mongoose.set('strictQuery',false);
/////{useNewURLParser:true,useUnifiedTopology:true}
mongoose.connect(sql)
    .then(()=>{
        console.log('connection successfull')
        app.listen(3000)
    }).catch((err)=>{
        console.log('something went wrong'+err)
    })
///////////////////////////database connection//////////////////////////////


const router=require("./routes/route")

app.set('view engine','ejs')
app.use(router)
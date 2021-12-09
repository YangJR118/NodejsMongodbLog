const express = require("express")//引进express
const app=express()
const mongoose = require('mongoose');//引进mongoose
mongoose.connect('mongodb://localhost/test1');//连接数据库
const schema={
    name:String,
    age:Number,
    health:String,
    hobby:String
}
const mydata = mongoose.model('cat1s',schema );
const kitty = new mydata({ name: 'testZildjian2' });
kitty.save()

app.use('/', express.static('public'))
app.get("/input",(req,res)=>{
     res.send(req.query)
     console.log(req.query)
})
app.listen(50317)
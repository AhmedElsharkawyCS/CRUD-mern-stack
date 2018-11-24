const express=require('express');
const mongoose=require('mongoose');
const contractRoute=require('./routes/route');
const bodyParser=require('body-parser');
const app=express();
const PORT=process.env.PORT||8000;

// connect to databsae
mongoose
.connect("mongodb://ahmed:ahmed1996@ds125673.mlab.com:25673/passport-oauth",{useNewUrlParser:true})//keys.db_UR
.then(() => {
        console.log("W're connected to db");
}).catch((err) => {
    console.log("Authentication Failed OR Connection Error\n");
});

//parse data
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
//handel server 404
// app.use(function(req,res){
//   res.status(404).json({
//      errors:{
//          global:"still working on it , please try again later."
//      }
//   });
// });
//config serever
if(process.env.NODE_ENV==='production'){
    app.use(express.static('contract/build'));
    const path=require('path');
    app.get('*',(req,res)=>{
        res.sendfile(path.resolve(__dirname,'contract','build','index.html'));
    })
}
//add routes
app.use('/api',contractRoute);

app.listen(PORT,function(){
    console.log("Server Running On Port:"+PORT);
});
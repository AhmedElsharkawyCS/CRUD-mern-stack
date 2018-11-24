const mongoose=require('mongoose');

const contractSchema=mongoose.Schema({
    
    user:{
       fusername:String,
       susername:String
    },
    amountInUsd:Number,
    currency:Number,
    date:{
        type:Date,
        default:Date.now()
    }

},{versionKey:false});

module.exports=mongoose.model('Contarct',contractSchema);
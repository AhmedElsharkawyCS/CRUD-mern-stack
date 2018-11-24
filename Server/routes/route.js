const express=require('express');
const router=express.Router();
const Contarct=require('../models/contract');


//return all contracts
router.get('/contracts',async function(req,res){
   const getAllContract=await Contarct.find();
   if(getAllContract)
            return res.json(getAllContract)
});
// create new contarct
router.post('/contracts/new', function(req,res){
    const newContract=new Contarct({
        user:{
            fusername:req.body.fusername,
            susername:req.body.susername
         },
         currency:req.body.currency
    });
    newContract.save().then((result) => {
        res.json(result)
    }).catch((err) => {
        res.status(500).json({success:false}) 
    });

});
//get by id
router.get('/contracts/:_id',async function(req,res){
    const findItem=await Contarct.findOne({_id:req.params._id});
    if(findItem){
        res.json(findItem);
    }else res.json({findItem:false})

})
//find one and remove by id
router.delete('/contracts/:_id',async function(req,res){
    const deleteItem=await Contarct.findOneAndRemove({_id:req.params._id});
    if(deleteItem){
        res.json(deleteItem);
    }else res.json({deleteItem:false})

})
//update item by id
router.post('/api/contractUpdate/:_id',async function(req,res){
    const search=await Contarct.findOne({_id:req.params._id});
    if(search){
        const item={
            user:{
                fusername:req.body.fusername,
                susername:req.body.susername
            },
            currency:req.body.currency,
            date:req.body.date
        }
        const itemUpdated=await Contarct.findOneAndUpdate({_id:req.body._id},{$set:item});
        if(itemUpdated){
            res.json(itemUpdated);
        }else{
            res.json({itemUpdated:false});
        }
    }
   
});

module.exports=router;
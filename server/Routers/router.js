const express=require('express');
const Task = require('../Schema/taskSchema')

const router= express.Router();
router.get('/get',async (req,res)=>{
    const result=await Task.find();
    res.send(result);
})

router.post('/post',async (req,res)=>{
    console.log(req.body)
    const newTask=new Task(req.body);
    const result=await newTask.save();
    res.send(result);
})

router.delete('/delete',async (req,res)=>{
 console.log(req.body);
 const {_id}=req.body;
 const result=await Task.deleteMany({_id:_id})
 res.send(result);
})

router.put('/put',async (req,res)=>{
    console.log(req.body);
    const {_id,remainder}=req.body;
    const result=await Task.updateOne({_id:_id},{$set:{remainder:!remainder}});
    res.send(result);
})

module.exports = router;
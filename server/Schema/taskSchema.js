const mongoose=require('mongoose');

const taskSchema=new mongoose.Schema({
          text: String,
          date: {
              type: String,
            },
          remainder:{
              type: Boolean, 
              default:false,
          },
})

const Task=mongoose.model('Task',taskSchema)
module.exports=Task;
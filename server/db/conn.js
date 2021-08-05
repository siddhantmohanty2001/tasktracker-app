const mongoose=require('mongoose');

mongoose.connect('mongodb+srv://admin:uncle123@cluster0.c11yt.mongodb.net/task?retryWrites=true&w=majority',{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useFindAndModify:false
}).then(()=> {
    console.log('connection successful')
}).catch((err)=>{
    console.log('not connected');
})
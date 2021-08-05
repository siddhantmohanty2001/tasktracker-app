const express=require('express');
const Cors=require('cors');
const port=process.env.PORT||5000
require('./db/conn')
app=express();
//middleware
app.use(Cors({
    origin:"*",
}))
app.use(express.json());
app.use(require('./Routers/router'));

app.listen(port, ()=>{
    console.log('listening on port',port);
})

import {useState} from 'react'
const AddTask =({onAdd,change,setChange})=>  {
    
        const [text,setText]=useState('')
        const [remainder,setRemainder]=useState(false)
        const [date,setDate]=useState('')
        
    
const postTask=async ()=>{
    const res=await fetch('https://tasktracker-app-final.herokuapp.com/post',{
        method:"POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body:JSON.stringify({text:text,remainder:remainder,date:date})
    })
    const data=await res.json();
    console.log(data);
    setChange(!change);
}
const onSubmit=(e)=>{
    e.preventDefault();
    if(text==='')
    {
        alert('Please add a task')
        return
    }
    const id=Math.floor(Math.random()*1000)+1
    {onAdd({id,text,date,remainder})}
    
    setText('')
    setDate('')
    setRemainder(false)
}
    return (
        <form onSubmit={onSubmit} method="post" >
          <label>task</label>  
          <div className="form-control"><input type="text" value={text} placeholder="Task" onChange={(e)=>{setText(e.target.value)}}></input></div>
          <label>date</label>
          <div className="form-control"><input type="text" value={date} placeholder="date" onChange={(e)=>{setDate(e.target.value)}}></input></div>
          <label>remainder</label>
          <div className="form-control form-control-check"><input type="checkbox" checked={remainder} value={remainder} onChange={(e)=>{setRemainder(e.currentTarget.checked)}}></input></div>
          <div className="btn btn-block"><input type="submit"  value='save task' onClick={postTask}></input></div>
        </form>
    )
}

export default AddTask

import { FaTimes } from 'react-icons/fa';

const Tasks = ({tasks,deletetask,onToggle}) => {
    return (
        <div className={tasks.remainder?"tasks reminder":"tasks"} onDoubleClick={()=>onToggle(tasks._id,tasks.remainder)}>
            <h3>{tasks.text} <FaTimes style={{color:'red', cursor:'pointer'}} onClick={()=>deletetask(tasks._id)} /></h3>
            <p>{tasks.date}</p>
        </div>
    )
}

export default Tasks

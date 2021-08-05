import Tasks from "./Tasks"

const Task = ({tasks,deletetask,onToggle}) => {
    return (
        <>
            {tasks.map((item) => {
                return(<Tasks key={item.id} tasks={item} deletetask={deletetask} onToggle={onToggle} />)
            })}
        </>
    )
}

export default Task
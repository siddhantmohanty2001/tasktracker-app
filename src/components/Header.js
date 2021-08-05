import Button from './Button'



const Header = ({name,showAddTask,text,col}) => {
    
    return (
        <header>
            <h1 >{name}</h1>
            <Button text={text} col={col} onClick={showAddTask}/>
            
        </header>
    )
}

Header.defaultProps ={
    name:"Task Tracker",
}

//CSS in JS
const headingStyle={color:'red', backgroundColor:'blue'}
export default Header

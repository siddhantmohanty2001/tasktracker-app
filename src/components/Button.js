
import PropTypes from 'prop-types'
const Button = (props) => {
    return (
        <div>
        <button className="btn" onClick={props.onClick} style={{backgroundColor:props.col}}>{props.text}</button>
        {console.log(props.onClick)}
       
        </div>
    )
}

export default Button

Button.defaultProps ={
    col:'steelblue'
}
Button.propTypes ={
    text: PropTypes.string,
    col: PropTypes.string
}
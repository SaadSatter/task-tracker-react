import PropTypes from 'prop-types'

const Button = ({backColor, text, onClick}) => {
    
    return (
        <div>
          <button onClick={onClick} 
          className = 'btn' style = {{color : 'white', backgroundColor: backColor}}>{text}</button>  
        </div>
    )
}

Button.defaultProps = {
    backColor : 'white',
    text : 'Add',
}

Button.propTypes = {
    text : PropTypes.string,
    backColor : PropTypes.string,
    onClick : PropTypes.func,
}

export default Button

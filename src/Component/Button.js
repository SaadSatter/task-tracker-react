import PropTypes from 'prop-types'

const Button = ({backColor, text, onClick}) => {
    
    return (
        <div>
          <button onClick={onClick} 
          //this will change all btn class attributes
          className = 'btn' style = {{color : 'white', backgroundColor: backColor}}>{text}</button>  
        </div>
    )
}

Button.defaultProps = {
    backColor : 'black',
    text : 'Add',
}

Button.propTypes = {
    text : PropTypes.string,
    backColor : PropTypes.string,
    onClick : PropTypes.func,
}

export default Button

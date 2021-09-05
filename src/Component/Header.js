import PropTypes from 'prop-types'
import Button from './Button'
//rafce shortcut component for arrow function
const Header = (props) => { //you can replace props with {title}if u want only title
    const onClick = () =>{
        console.log("click");
    } 
    return (
        <header className = 'header'>
            <h1
            //CSS
                //  Using "style"  for inline css, you can do it out of line down below
                style={{color : 'red', backgroundColor : 'black'}}> Task Tracker {props.title} {/*'title' is the specified prop*/} 
            </h1>
            {/* <h2 style = {headingStyle}>
                Sample Style
            </h2> */}
            <Button backColor = 'green' text = 'Add' onClick = {onClick}/>
        </header>
    )
}
//if there is no title then u can make a default title
Header.defaultProps = {
    title: 'Task Tracker',
    header: 'Header',
}
//defines the types of each prop to help with debugging and catching errors
//isRequired will throw a harsh error and require the type to match 
Header.propTypes = {
    title: PropTypes.string,
    header: PropTypes.string.isRequired,
}
//CSS
const headingStyle = {
    color : 'yellow', backgroundColor : 'purple',
}
export default Header

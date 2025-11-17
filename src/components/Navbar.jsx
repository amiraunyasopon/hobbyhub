import "./Navbar.css"
import { Link } from 'react-router-dom'

const Navbar = (props) => {
    return (
        <>
            <div className="nav-bar">
                <Link to="/"><button className={`headerBtn ${props.theme}`}>Too Talented</button></Link>
                <Link to="/new"><button className={`headerBtn ${props.theme}`}>Post</button></Link>
                <Link to="/contact"><button className={`headerBtn ${props.theme}`}>Contact Us</button></Link>
                <button className={`headerBtn ${props.theme}`} onClick={props.onToggleTheme}>theme</button>
            </div>
        </>
    )
}

export default Navbar
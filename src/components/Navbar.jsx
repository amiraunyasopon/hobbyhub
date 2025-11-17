import "./Navbar.css"
import { Link } from 'react-router-dom'

const Navbar = (props) => {
    return (
        <>
            <div className="nav-bar">
                <Link to="/"><button className={`headerBtn ${props.theme}`}>too talented</button></Link>
                <Link to="/new"><button className={`headerBtn ${props.theme}`}>post</button></Link>
                <Link to="/contact"><button className={`headerBtn ${props.theme}`}>contact us</button></Link>
                <button className={`headerBtn ${props.theme}`} onClick={props.onToggleTheme}>theme</button>
            </div>
        </>
    )
}

export default Navbar
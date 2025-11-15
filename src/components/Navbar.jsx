import "./Navbar.css"
import { Link } from 'react-router-dom'

const Navbar = ({ }) => {
    return (
        <>
            <div className="nav-bar">
                <Link to="/"><button className="headerBtn">Too Talented</button></Link>
                <Link to="/new"><button className="headerBtn">Post</button></Link>
                <Link to="/gallery"><button className="headerBtn">Contact Us</button></Link>
            </div>
        </>
    )
}

export default Navbar
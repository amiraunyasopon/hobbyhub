import './App.css'
import { useRoutes } from 'react-router-dom'
import { useState } from "react"
import Landing from "./pages/Landing"
import CreatePost from "./pages/CreatePost"
import EditPost from "./pages/EditPost"
import PostDetails from "./pages/PostDetails"
import Contact from "./pages/Contact"
import Navbar from "./components/Navbar"

function App() {
    const [theme, setTheme] = useState("dark");

    let element = useRoutes([
        {
            path: "/",
            element: <Landing />
        },
        {
            path: "/new",
            element: <CreatePost theme={theme} />
        },
        {
            path: "/edit/:id",
            element: <EditPost />
        },
        {
            path: "/post/:id",
            element: <PostDetails />
        },
        {
            path: "/contact",
            element: <Contact />
        }
    ])

    const toggleTheme = () => {
        setTheme((prevTheme => (prevTheme === "light" ? "dark" : "light")))
    }

    return (
        <>
            <div className={`whole-page ${theme}`}>
                <Navbar onToggleTheme={toggleTheme} theme={theme} />
                <div className="theme-toggle">
                    {element}
                </div>
            </div>
        </>
    )
}

export default App

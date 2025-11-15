import './App.css'
import { useRoutes } from 'react-router-dom'
import Landing from "./pages/Landing"
import Navbar from "./components/Navbar"

function App() {

    let element = useRoutes([
        {
            path: "/",
            element: <Landing />
        },
        {
            path: "/new",
            element: <CreatePost />
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
    return (
        <>
            <div className="whole-page">
                <Navbar />
                <div>
                    {element}
                </div>
            </div>
        </>
    )
}

export default App

import './App.css'
import { useRoutes } from 'react-router-dom'
import Landing from "./pages/Landing"
import NavBar from "./components/NavBar"

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
        }
    ])
    return (
        <>
            <div className="whole-page">
                <NavBar />
                <div>
                    {element}
                </div>
            </div>
        </>
    )
}

export default App

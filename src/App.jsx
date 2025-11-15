import './App.css'
import { useRoutes } from 'react-router-dom'
import Navbar from "./components/Navbar"
import Landing from "./pages/Landing"

function App() {

    let element = useRoutes([
        {
            path: "/",
            element: <Landing />
        },
        // {
        //     path: "/gallery/edit/:id",
        //     element: <EditCrew />
        // },
        // {
        //     path: "/gallery/detailed/:id",
        //     element: <DetailedView />
        // }
    ])
    return (
        <>
            <Navbar />
            <div>
                {element}
            </div>
        </>
    )
}

export default App

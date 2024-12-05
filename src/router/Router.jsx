import Register from "../components/Register.jsx";
import Login from "../components/Login.jsx";
import Mainapp from "../components/Mainapp.jsx";
import Layout from "../Layout/Layout.jsx";
import EventList from "../components/EventList.jsx";


const ROUTES = [
    {
        path: '/',
        element: <Layout/>,
        children:[
            {
                path: '/mainapp',
                element: <Mainapp/>,
            },
            {
                path: '/register',
                element: <Register/>,
            }
        ]
    },
    {
        path: 'login',
        element: <Login/>,
    },
    {
        path: '/events',
        element: <EventList/>,
    }

]

export default ROUTES;
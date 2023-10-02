import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Home/Home";
import AppliedJobs from "../AppliedJobs/AppliedJobs";
import ErrorPage from "../ErrorPage/ErrorPage";
import JobDetails from "../JobDetails/JobDetails";
import Login from "../Login/Login";
import Register from "../Register/Register";
import PrivateRoute from "../../PrivateRoute/PrivateRoute";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/applied',
                element: <PrivateRoute><AppliedJobs></AppliedJobs></PrivateRoute>,
                loader: () => fetch('/jobs.json') // warning: only load the data you need. do not load all the data
            },
            {
                path:'/job/:id',
                loader:()=>fetch('/jobs.json'),
                element:<PrivateRoute><JobDetails></JobDetails></PrivateRoute>

            },
            {
                path:'/login',
                element:<Login></Login>

            },
            {
                path:'/register',
                element:<Register></Register>
            },
        ]
    }
])

export default router;
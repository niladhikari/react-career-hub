import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Home/Home";
import AppliedJobs from "../AppliedJobs/AppliedJobs";
import ErrorPage from "../ErrorPage/ErrorPage";


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
                element: <AppliedJobs></AppliedJobs>
            }
        ]
    }
])

export default router;
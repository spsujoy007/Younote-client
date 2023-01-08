import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Elements from "../Pages/Home/Elements/Elements";
import Home from "../Pages/Home/Home/Home";
import ErrorPage from "../Pages/Shared/ErrorPage/ErrorPage";

export const routes = createBrowserRouter([
    {
        path: "/",
        errorElement: <ErrorPage></ErrorPage>,
        element: <Main></Main>,
        children: [
            {

                path: "/",
                element: <Home></Home>
            },
            {

                path: "/element",
                element: <Elements></Elements>
            },
        ]
    }
])
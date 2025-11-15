import {
    Navigate,
    createBrowserRouter,
} from "react-router";
import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import Root from "../pages/Root";
import handleApiData from "../utilities/handleApiData";
import NewsSection from "../components/NewsSection";
import SignUp from "../pages/SignUp";
import Login from "../pages/Login";
import PassReset from "../pages/PassReset";
import SingleNews from "../pages/SingleNews";
import PrivateRoute from "../privateRoute/PrivateRoute";
import Dashboard from "../pages/Dashboard";



const router = createBrowserRouter([
    {
        path: "",
        element: <Root></Root>,
        children: [
            {
                index: true,
                element: <Navigate to={"home"}></Navigate>
            },
            {
                path: `home`,
                element: <Home></Home>,
                loader: () => (fetch('/categories.json')),
                children: [
                    {
                        index: true,
                        element: <Navigate to={"all_news"}></Navigate>
                    }
                    ,
                    {
                        path: ":categoryName",
                        element: <NewsSection></NewsSection>,
                        loader: handleApiData
                    },
                ]
            },
            {
                path: "home/:categoryName/:id",
                loader: handleApiData,
                element: <PrivateRoute><SingleNews></SingleNews></PrivateRoute>
            },
            {
                path: "about",
                element: <AboutUs></AboutUs>
            },
            {
                path: "signup",
                element: <SignUp></SignUp>
            },
            {
                path: "login",
                element: <Login></Login>
            },
            {
                path: "recovery",
                element: <PassReset></PassReset>
            },
            {
                path: "dashboard",
                element: <Dashboard></Dashboard>
            }
        ]
    },

]);

export default router;
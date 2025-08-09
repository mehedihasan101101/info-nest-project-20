import {
    Navigate,
    createBrowserRouter,
} from "react-router";
import Home from "../layouts/Home";
import AboutUs from "../layouts/AboutUs";
import Root from "../layouts/Root";
import handleApiData from "../utilities/handleApiData";
import NewsSection from "../components/NewsSection";
import SignUp from "../layouts/SignUp";
import Login from "../layouts/Login";
import PassReset from "../layouts/PassReset";
import SingleNews from "../layouts/SingleNews";



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
                element: <SingleNews></SingleNews>
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
            }
        ]
    },

]);

export default router;
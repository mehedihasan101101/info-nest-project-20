import {
    Navigate,
    createBrowserRouter,
} from "react-router";
import Home from "../layouts/Home";
import AboutUs from "../layouts/AboutUs";
import Root from "../layouts/Root";
import NewsCard from "../components/NewsSection";
import handleApiData from "../utilities/handleApiData";
import NewsSection from "../components/NewsSection";
import SignUp from "../layouts/SignUp";
import Login from "../components/Login";


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
                    {
                        path: ":categoryName/:id",
                        element: <h1>single</h1>
                    }
                ]
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
            }
        ]
    },

]);

export default router;
import {
    createBrowserRouter,
} from "react-router";
import Home from "../layouts/Home";
import AboutUs from "../layouts/AboutUs";
import Root from "../layouts/Root";


const router = createBrowserRouter([
    {
        path: "",
        element: <Root></Root>,
        children: [
            {
                path: "",
                element: <Home></Home>,
                loader: () => (fetch('/categories.json'))
            },
            {
                path: "about",
                element: <AboutUs></AboutUs>
            }
        ]
    },

]);

export default router;
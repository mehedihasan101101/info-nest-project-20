import { Children, useContext } from "react";
import { AutContext } from "../Context/AuthContext";
import { Navigate, useLocation } from "react-router";
import LoadingPage from "../pages/LoadingPage";


const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AutContext)

    const location = useLocation()

    console.log(location)

    if (loading) {
        return <LoadingPage></LoadingPage>
    }
    if (user) {
        return children

    }
    return <Navigate state={location.pathname} to={"/login"}></Navigate>
};

export default PrivateRoute;
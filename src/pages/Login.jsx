import { useContext, useState } from "react";
import { Link, Navigate, useLocation } from "react-router";
import { AutContext } from "../Context/AuthContext";
import { sendEmailVerification } from "firebase/auth";
import auth from "../firebase/firebase.init";
import LoadingPage from "./LoadingPage";
const Login = () => {

    const [errorMessage, setErrorMessage] = useState("")
    const [verificationErr, setverificationErr] = useState(false)

    const location = useLocation()
    console.log(location)
    const { LogIn, SetUser, user, loading, setLoading } = useContext(AutContext)

    // reverifying user

    function reVerify() {
        setErrorMessage("")
        sendEmailVerification(auth.currentUser)
            .then(
                console.log("Success")
            )
            .catch(() => {
                setErrorMessage("Check your inbox or spam folder for the verification link we’ve sent. If it has expired, please try again in a few minutes.")
            })
    }

    function handleLogin(e) {

        e.preventDefault()
        setErrorMessage("")
        setverificationErr(false)
        const email = e.target.email.value;
        const password = e.target.password.value;

        LogIn(email, password)

            .then((result) => {

                if (!result.user.emailVerified) {
                    SetUser(null)
                    setverificationErr(true);
                    setLoading(false)
                }
                else {
                    SetUser(result.user)
                    setLoading(false)
                }
            })
            .catch(error => {
                setLoading(false)
                setErrorMessage(error.message)
                console.log(error.message)
            })
    }
    if (loading) {
        return <LoadingPage></LoadingPage>
    }
    if (user) {

        return (
            <>{
                location.state ? <Navigate to={location.state}></Navigate> : <Navigate to={"/"}></Navigate>
            }
            </>
        )
    }


    if (!user) {
        return (
            <div className=" flex flex-col justify-center items-center  mt-13 pb-12">
                <div className=" lg:w-[35%] md:w-[70%] w-[98%]  rounded flex flex-col items-center space-y-3 px-6 pb-10 pt-8 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
                    <h1 className="text-3xl font-bold text-black  pb-3">Create your Account</h1>
                    <hr className=" text-gray-200 w-full pb-2" />
                    {/* form */}

                    <form onSubmit={handleLogin} className="w-full flex flex-col px-3 space-y-4">


                        {/* Email */}
                        <label className="font-bold">Email</label>
                        <input name="email" className="input validator  border-0 bg-gray-100 border-gray-200 w-full" type="email" required placeholder="mail@site.com" />
                        {/* password */}
                        <label className="font-bold">Password</label>
                        <input name="password" type="password" className="input   border-0 bg-gray-100 border-gray-200 w-full" required placeholder="Password" />
                        {/* terms */}



                        <p className="">Don’t have an account?<Link state={location.state} to={"/signup"} className="text-blue-500 ml-1">Sign Up</Link></p>
                        <Link to={"/recovery"} className="mt-[-12px] text-blue-500">Forget Password</Link>

                        {/* error */}
                        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
                        {verificationErr && <p className="text-red-500">Please verify your email to log in.<Link state={location.state} onClick={reVerify} className="text-blue-500">Resend</Link></p>}
                        {/* submit */}
                        <input className="btn bg-black text-white " type="submit" value="Login" />
                    </form>

                </div>
            </div>
        );
    }

};

export default Login;
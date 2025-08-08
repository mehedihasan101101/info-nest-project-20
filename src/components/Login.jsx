import { useContext, useState } from "react";
import { Link } from "react-router";
import { AutContext } from "../Context/AuthContext";

const Login = () => {
    const [errorMessage, setErrorMessage] = useState("")

    const { LogIn, user } = useContext(AutContext)
    function handleLogin(e) {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;

        LogIn(email, password)
            .then(result => {
                console.log(result);
            })
            .catch(error => {
                setErrorMessage(error.message)
                console.log(error.message)
            })
    }
    console.log(user)
    return (
        <div className=" flex flex-col justify-center items-center  mt-13 pb-12">
            <div className=" lg:w-[35%] w-[98%]  rounded flex flex-col items-center space-y-3 px-6 pb-10 pt-8 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
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



                    <p className="">Don’t have an account?<Link to={"/signup"} className="text-blue-500 ml-1">Sign Up</Link></p>

                    {/* error */}
                    {errorMessage && <p className="text-red-500">{errorMessage}</p>}
                    {/* submit */}
                    <input className="btn bg-black text-white " type="submit" value="Login" />
                </form>

            </div>
        </div>
    );
};

export default Login;
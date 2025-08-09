import { useContext, useState } from "react";
import { AutContext } from "../Context/AuthContext";
import { Link } from "react-router";

const PassReset = () => {
    const [success, setSuccess] = useState(false)
    const [errorM, setErrorM] = useState("")
    const { resetPassword } = useContext(AutContext);
    function handleResetPass(e) {
        e.preventDefault()
        setSuccess(false);
        const email = e.target.email.value;
        resetPassword(email)
            .then(() => {
                setSuccess(true)
            })
            .catch((error => {
                setErrorM(error.message)
            }))


    }
    return (
        <div className=" flex flex-col justify-center items-center  mt-13 pb-12">
            <div className=" lg:w-[35%] w-[98%]  rounded flex flex-col items-center space-y-3 px-6 pb-10 pt-8 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
                <h1 className="text-3xl font-bold text-black  pb-3">Account Recovery</h1>
                {success && <p className="text-green-500 flex flex-col items-center">We’ve sent you an email with a link to reset your password.<Link to={"/login"} className="text-blue-500">Login Now!</Link></p>}
                {/* submit */}
                <hr className=" text-gray-200 w-full pb-2" />
                {/* form */}

                <form onSubmit={handleResetPass} className="w-full flex flex-col px-3 space-y-4">


                    {/* Email */}
                    <label className="font-bold">Email</label>
                    <input name="email" className="input validator  border-0 bg-gray-100 border-gray-200 w-full" type="email" required placeholder="mail@site.com" />
                    {errorM && <p>{errorM}</p>}
                    <input className="btn bg-black text-white " type="submit" value="Recovery" />
                </form>

            </div>
        </div>
    );
};

export default PassReset;
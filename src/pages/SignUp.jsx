import { useContext, useState } from "react";
import { AutContext, AuthContext } from "../Context/AuthContext";
import { sendEmailVerification } from "firebase/auth";
import auth from "../firebase/firebase.init";
import { Link } from "react-router";
const SignUp = () => {
    const { singUp, updateUser } = useContext(AutContext);
    const [success, setSuccess] = useState(false)
    function handleSignUp(e) {
        e.preventDefault()
        setSuccess(false);
        const name = e.target.Name.value;
        const ImgLink = e.target.image.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        singUp(email, password)
            .then(result => {
                console.log(result);
                //  verifying user
                sendEmailVerification(auth.currentUser)
                    .then(() => {
                        console.log("email sent")
                        setSuccess(true);
                    })
                // profile update
                updateUser(name, ImgLink)
            })
            .catch(err => {
                console.log(err)
            })

    }

    return (
        <div className=" flex flex-col justify-center items-center  mt-13 pb-12">
            <div className=" lg:w-[35%] w-[98%]  rounded flex flex-col items-center space-y-3 px-6 pb-10 pt-8 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
                <h1 className="text-3xl font-bold text-black  pb-3">Create your Account</h1>
                {/* Success Message */}
                {success && <p className="text-green-600 text-center">Account created! Check your email to verify before logging in. </p>}
                <hr className=" text-gray-200 w-full pb-2" />
                {/* form */}

                <form onSubmit={handleSignUp} className="w-full flex flex-col px-3 space-y-4">
                    {/* Name Field */}
                    <label className="font-bold">Your Name</label>
                    <input type="text" name="Name" className="input validator border-0 bg-gray-100 border-gray-200 w-full " required placeholder="Enter Your Name"
                        pattern="[A-Za-z][A-Za-z0-9\-]*" minlength="3" maxlength="30" title="Only letters, numbers or dash" />

                    {/* Image URL */}
                    <label className="font-bold">Photo URL</label>
                    <input name="image" type="url" className="input validator border-0 bg-gray-100 border-gray-200 w-full" required placeholder="https://"
                        pattern="^(https?://)?([a-zA-Z0-9]([a-zA-Z0-9-].*[a-zA-Z0-9])?.)+[a-zA-Z].*$"
                        title="Must be valid URL" />
                    {/* Email */}
                    <label className="font-bold">Email</label>
                    <input name="email" className="input validator  border-0 bg-gray-100 border-gray-200 w-full" type="email" required placeholder="mail@site.com" />
                    {/* password */}
                    <label className="font-bold">Password</label>
                    <input name="password" type="password" className="input validator  border-0 bg-gray-100 border-gray-200 w-full" required placeholder="Password" minlength="8"
                        pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                        title="Must be more than 8 characters, including number, lowercase letter, uppercase letter" />
                    {/* terms */}

                    <label className="label text-black flex gap-2 ">
                        <input type="checkbox" className="checkbox validator" required title="Required" />
                        <span className="mt-1">I Agree to the Terms & Conditions</span>
                    </label>

                    <p className="">Already have an Account!<Link to={"/login"} className="text-blue-500 ml-1">Login</Link></p>


                    {/* submit */}
                    <input className="btn bg-black text-white " type="submit" value="Register" />
                </form>

            </div>
        </div>
    );
};

export default SignUp;
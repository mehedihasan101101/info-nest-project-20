
const SignUp = () => {
    return (
        <div className=" flex flex-col justify-center items-center">
            <div className=" w-[40%]  rounded flex flex-col items-center space-y-3 px-6 pb-10 pt-8 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
                <h1 className="text-3xl font-bold text-black  pb-3">Create your Account</h1>
                <hr className=" text-gray-200 w-full pb-2" />
                {/* form */}

                <form className="w-full flex flex-col px-3 space-y-4">
                    {/* Name Field */}
                    <label className="font-bold">Your Name</label>
                    <input type="text" className="input validator border-0 bg-gray-100 border-gray-200 w-full " required placeholder="Enter Your Name"
                        pattern="[A-Za-z][A-Za-z0-9\-]*" minlength="3" maxlength="30" title="Only letters, numbers or dash" />

                    {/* Image URL */}
                    <label className="font-bold">Photo URL</label>
                    <input type="url" className="input validator border-0 bg-gray-100 border-gray-200 w-full" required placeholder="https://"
                        pattern="^(https?://)?([a-zA-Z0-9]([a-zA-Z0-9-].*[a-zA-Z0-9])?.)+[a-zA-Z].*$"
                        title="Must be valid URL" />
                    {/* Email */}
                    <label className="font-bold">Email</label>
                    <input className="input validator  border-0 bg-gray-100 border-gray-200 w-full" type="email" required placeholder="mail@site.com" />
                    {/* password */}
                    <label className="font-bold">Password</label>
                    <input type="password" className="input validator  border-0 bg-gray-100 border-gray-200 w-full" required placeholder="Password" minlength="8"
                        pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                        title="Must be more than 8 characters, including number, lowercase letter, uppercase letter" />

                    {/* submit */}
                    <input className="btn bg-black text-white mt-7" type="submit" value="Register" />
                </form>

            </div>
        </div>
    );
};

export default SignUp;
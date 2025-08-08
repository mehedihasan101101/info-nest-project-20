import { Link, NavLink, } from "react-router";
import { CiUser } from "react-icons/ci";
import { BsBroadcastPin } from "react-icons/bs";
import { IoIosMenu } from "react-icons/io";
import { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import MainIcon from "../assets/mainIcon.png";


const NavBar = () => {
    // State to handle mobile menu open/close

    const [open, setOpen] = useState(false);

    // Navigation fields for the navbar links
    const navFields = [
        { id: 1, path: "home", name: "Home" },
        { id: 2, path: "about", name: "About Us" },
        { id: 3, path: "/Dashboard", name: "Career" },
    ]

    if (open) {
        document.body.classList.add("overflow-hidden")
    }
    else {
        document.body.classList.remove("overflow-hidden")
    }
    return (
        // Main navigation bar
        <nav className={`lg:py-3 py-2   bg-transparent  flex flex-col items-center`}>

            <div className="container m-auto flex justify-between items-center ">
                <div className="flex gap-1">
                    {/* Mobile Menu Toggle Icon */}
                    <div className="lg:hidden z-50 ">
                        {
                            open ? <RxCross1 onClick={() => setOpen(!open)} className="text-2xl font-normal"></RxCross1> : <IoIosMenu onClick={() => setOpen(!open)} className="text-2xl font-normal"></IoIosMenu>
                        }
                    </div>
                    {/* Live*/}
                    <button className="  border border-red-500 px-3 rounded"><Link className="flex items-center justify-center gap-1 text-red-500"><BsBroadcastPin /><span className="lg:block mt-1 hidden">Live</span></Link></button>


                </div>


                {/* Main Icon */}
                <img className="md:w-[300px] w-[220px]" src={MainIcon} alt="" />

                {/* Add to Cart button */}
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="">
                        <div className="border border-black/50 px-1 py-1 rounded hover:border-black">
                            <CiUser className="text-black/90 hover:text-black"></CiUser>
                        </div>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li>
                            <a className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <li>
                            <Link to={"signup"}>Sign Up</Link>
                        </li>
                        <li>
                            <Link to={"login"}>Login</Link>
                        </li>
                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>


            </div>
            {/* Navigation Links */}
            <div className={` ${open ? "left-0" : "left-[-500px]"} duration-700  lg:static lg:block  lg:w-auto lg:h-auto md:w-[30%] w-[45%] top-0 h-screen z-40 bg-neutral-100/90 lg:bg-transparent   absolute `}>

                <ul className="lg:flex   gap-7 lg:mt-0 mt-20 lg:bg-transparent text-[#6b6b6f]">

                    {navFields.map((field) => <NavLink key={field.id} to={field.path} className={({ isActive }) => `rounded px-3 py-2 block ${isActive ? "text-black/80" :
                        " hover:bg-neutral-100"}`}>{field.name}</NavLink>)}
                </ul>
            </div>
        </nav >
    );
};

export default NavBar;
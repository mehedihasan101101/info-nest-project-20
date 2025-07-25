import { Link, NavLink } from "react-router";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsBroadcastPin } from "react-icons/bs";

import { IoIosMenu } from "react-icons/io";
import { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import MainIcon from "../assets/mainIcon.png"

const NavBar = () => {
    // State to handle mobile menu open/close
    const [open, setOpen] = useState(false);

    // Navigation fields for the navbar links
    const navFields = [
        { id: 1, path: "category/all", name: "Home" },
        { id: 2, path: "/Statistics", name: "Statistics" },
        { id: 3, path: "/Dashboard", name: "Dashboard" },
        { id: 4, path: "/AboutUs", name: "About Us" },
    ]

    if (open) {
        document.body.classList.add("overflow-hidden")
    }
    else {
        document.body.classList.remove("overflow-hidden")
    }
    return (
        // Main navigation bar
        <nav className={`lg:py-6 py-5   bg-transparent pr-2 mt-2  flex flex-col items-center`}>

            <div className="container m-auto flex justify-between items-center px-2 md:px-4">
                {/* Mobile Menu Toggle Icon */}
                <div className="lg:hidden z-50">
                    {
                        open ? <RxCross1 onClick={() => setOpen(!open)} className="text-3xl"></RxCross1> : <IoIosMenu onClick={() => setOpen(!open)} className="text-3xl"></IoIosMenu>
                    }
                </div>
                {/* Live*/}
                <button className=" py-1 border border-red-500 px-4 rounded"><Link className="flex items-center justify-center gap-1 text-red-500"><BsBroadcastPin /><span className="lg:block hidden">Live</span></Link></button>
                {/* Navigation Links */}
                <img className="w-[400px]" src={MainIcon} alt="" />

                <div className="flex  gap-3">
                    {/* Add to Cart button */}
                    <button className="btn indicator btn-circle" >
                        <AiOutlineShoppingCart className="text-2xl text-black"></AiOutlineShoppingCart>
                    </button>
                </div>

            </div>

            <div className={` ${open ? "left-0" : "left-[-500px]"} duration-700  lg:static lg:block  lg:w-auto lg:h-auto md:w-[30%] w-[45%] top-0 h-screen z-40 bg-neutral-100/90 lg:bg-transparent   absolute `}>

                <ul className="lg:flex   gap-7 lg:mt-0 mt-19 lg:bg-transparent text-[#6b6b6f]">

                    {navFields.map((field) => <NavLink key={field.id} to={field.path} className={({ isActive }) => `rounded px-3 py-2 block ${isActive ? "text-white bg-black" :
                        " hover:bg-neutral-100"}`}>{field.name}</NavLink>)}
                </ul>
            </div>
        </nav >
    );
};

export default NavBar;
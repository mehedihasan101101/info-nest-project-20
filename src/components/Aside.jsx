import { FaFacebookF } from "react-icons/fa6";

import { BsTwitterX } from "react-icons/bs";

import instagramIcon from "./../assets/instagram.png"

import classImg from './../assets/class.png'

import playgroundImg from './../assets/playground.png'

import swimming from './../assets/swimming.png'

import adImage from './../assets/Advertisement.png'



const Aside = () => {
    return (
        <>
            {/* Find us Section */}

            < section className="" >
                <h5 className="text-xl font-bold">Find Us On</h5>
                <button className=" px-5 py-2 border border-gray-200 rounded-t-md  w-full flex cursor-pointer items-center gap-1"> <span className=" bg-[#F3F3F3] text-[#3B599C] p-2   rounded-full"><FaFacebookF className="text-xl"></FaFacebookF></span>Facebook</button>
                <button className=" px-5 py-2 border border-gray-200   w-full flex cursor-pointer items-center gap-1"> <span className=" bg-[#F3F3F3]  p-2   rounded-full"><BsTwitterX className="text-xl"></BsTwitterX></span>Twitter</button>
                <button className=" px-5 py-2 border border-gray-200 rounded-b-md  w-full flex cursor-pointer items-center gap-1"> <span className=" bg-[#F3F3F3]   p-2   rounded-full"><img width={"24px"} src={instagramIcon} alt="" /></span>Instagram</button>
            </section >
            {/* Q-Zone */}
            < section className="bg-[#F3F3F3] py-5 px-2 mt-4" >
                <h5 className="text-xl font-bold">Q-Zone</h5>
                <div className="">
                    <img src={classImg} alt="" />
                </div>
                <div className="">
                    <img src={swimming} alt="" />
                </div>
                <div className="">
                    <img src={playgroundImg} alt="" />
                </div>

            </section >

            {/* Advertisement  */}

            < section className="mt-4" >
                <img src={adImage} alt="" />
            </section >
        </>

    );
};

export default Aside;
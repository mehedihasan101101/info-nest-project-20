import { Link, useLoaderData, useParams } from "react-router";
import Aside from "../components/Aside";

import { IoCaretBackOutline } from "react-icons/io5";

const SingleNews = () => {
    const allNews = useLoaderData();
    // Find a specific news item by param. Using .find() here for learning purposes — not the most efficient for large datasets.
    const param = useParams();
    const { id, categoryName } = param;
    const sinleNews = allNews.find(eachNews => eachNews._id == id);
    const { image_url, title, details } = sinleNews
    return (
        <div className="grid grid-cols-12 md:gap-5 gap-2">
            <div className="lg:col-span-10 md:col-span-9 col-span-8">
                <h1 className="text-xl font-bold">InfoNest News</h1>
                <div className=" rounded space-y-5 mt-6 lg:p-10 p-3 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
                    <img className="w-full rounded" src={image_url} alt="" />
                    <h1 className="text-3xl font-bold">{title}</h1>
                    <p>{details}</p>
                    <button><Link to={`/home/${categoryName}`} className="flex items-center btn text-red-500 md:text-xl"><IoCaretBackOutline></IoCaretBackOutline>All news in this category</Link></button>

                </div>

            </div>
            <aside className="lg:col-span-2 mt-6 md:col-span-3  col-span-4 ">
                <Aside></Aside>
            </aside>
        </div>
    );
};

export default SingleNews;
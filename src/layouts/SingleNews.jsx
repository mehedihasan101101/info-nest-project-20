import { useLoaderData } from "react-router";
import Aside from "../components/Aside";


const SingleNews = () => {
    const allNews = useLoaderData();
    console.log(allNews)
    return (
        <div className="grid grid-cols-12 gap-5">
            <div className="g:col-span-10 md:col-span-9 col-span-8">
                <h1 className="text-xl font-bold">InfoNest News</h1>
                <div>

                </div>


            </div>
            <aside className="lg:col-span-2 md:col-span-3 mt-2 col-span-4 ">
                <Aside></Aside>
            </aside>
        </div>
    );
};

export default SingleNews;
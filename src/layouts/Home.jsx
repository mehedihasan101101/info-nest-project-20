import { Link, NavLink, useLoaderData } from "react-router";

import BreakingNewsHeadline from "./../components/BreakingNewsHeadline"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 8
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 5
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 3
    }
}
const Home = () => {
    const categories = useLoaderData();
    return (
        <>
            {/* Breaking News Headlines */}
            <BreakingNewsHeadline></BreakingNewsHeadline>
            <section className="mt-2 ">
                <Carousel className="flex" responsive={responsive} infinite={false} removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}>
                    {
                        categories.map(eachCategory => <div className=" px-1 w-full"><NavLink className={({ isActive }) => `border rounded-full flex items-center justify-center border-gray-300 py-1  text-center text-black${isActive && "text-red-500"}`}>{eachCategory.category}</NavLink></div>)
                    }
                </Carousel>

            </section>

            <div className="grid grid-cols-12">
                {/* News section */}
                <div className="col-span-10">
                    <h1>News</h1>
                </div>

                {/* Aside for other contents */}
                <aside className="col-span-2">
                    <h1>Aside</h1>
                </aside>
            </div>
        </>
    );
};

export default Home;
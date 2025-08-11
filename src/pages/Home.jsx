import { NavLink, Outlet, useLoaderData } from "react-router";
import BreakingNewsHeadline from "../components/BreakingNewsHeadline";
import Aside from "../components/Aside";




const Home = () => {

    const categories = useLoaderData();
    return (
        <>

            {/* Breaking News Headlines */}
            <BreakingNewsHeadline></BreakingNewsHeadline>
            <section className="mt-2 py-4 lg:grid lg:grid-flow-col lg:overflow-hidden  flex  gap-1 overflow-auto">

                {
                    categories.map(eachCategory => <NavLink to={eachCategory.link} className={({ isActive }) => `  text-center text-black ${isActive && "text-red-500"} rounded-full flex items-center justify-center  border-gray-300 p-1 h-[30px] min-w-[150px] border`}>{eachCategory.category}</NavLink>)
                }

            </section>
            <div className="grid grid-cols-12 gap-5">
                {/* News section */}
                <div className="lg:col-span-10 md:col-span-9 col-span-8 mt-2">
                    <Outlet></Outlet>
                </div>

                {/* Aside for other contents */}
                <aside className="lg:col-span-2 md:col-span-3 mt-2 col-span-4  ">
                    <Aside></Aside>

                </aside>
            </div>
        </>
    );
};

export default Home;
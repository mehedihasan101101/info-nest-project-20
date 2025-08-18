import { useLoaderData } from "react-router";
import NewsCard from "./NewsCard";
import { useState } from "react";


const NewsSection = () => {
    const [visible, setVisible] = useState(12)
    const data = useLoaderData();

    function handleLoadMore() {
        setVisible(visible + 4)
        if (visible == data.length) {
            return false
        }
    }

    return (
        <>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:gap-6 gap-5 ">
                {
                    data.slice(0, visible).map(eachData => <NewsCard key={eachData._id} eachData={eachData}></NewsCard>)
                }

            </div>
            <div className="w-full flex  flex-col items-center mt-10">
                <button onClick={handleLoadMore} className="btn" disabled={visible >= data.length}>Load More </button>
            </div>


        </>

    );
};

export default NewsSection;
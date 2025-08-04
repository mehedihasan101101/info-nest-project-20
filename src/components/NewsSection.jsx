import { useLoaderData } from "react-router";
import NewsCard from "./NewsCard";


const NewsSection = () => {

    const data = useLoaderData();



    return (
        <>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-6 gap-5 ">
                {
                    data.map(eachData => <NewsCard eachData={eachData}></NewsCard>)
                }
            </div>

        </>

    );
};

export default NewsSection;
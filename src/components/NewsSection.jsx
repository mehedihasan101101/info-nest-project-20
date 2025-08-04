import { useLoaderData } from "react-router";
import NewsCard from "./NewsCard";


const NewsSection = () => {

    const data = useLoaderData();



    return (
        <>
            <div className="grid grid-cols-3 gap-5 ">
                {
                    data.map(eachData => <NewsCard eachData={eachData}></NewsCard>)
                }
            </div>

        </>

    );
};

export default NewsSection;
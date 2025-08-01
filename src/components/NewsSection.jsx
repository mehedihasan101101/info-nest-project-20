import { useLoaderData } from "react-router";
import NewsCard from "./NewsCard";


const NewsSection = () => {

    const data = useLoaderData();

    const { author } = data;
    console.log(author)
    console.log(data)

    return (
        <>
            {
                data.map(eachData => <NewsCard eachData={eachData}></NewsCard>)
            }
        </>

    );
};

export default NewsSection;
import { useLoaderData } from "react-router";


const NewsCard = () => {

    const data = useLoaderData();
    console.log(data)

    return (
        <div>
            <h1>This is news Card</h1>
        </div>
    );
};

export default NewsCard;
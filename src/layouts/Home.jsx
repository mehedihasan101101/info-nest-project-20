import { Link, useLoaderData } from "react-router";
import BreakingNewsHeadline from "../components/BreakingNewsHeadline";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 8
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 6
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
}
const Home = () => {
    const categories = useLoaderData();
    console.log(categories)
    return (
        <>
            {/* Breaking News Headlines */}
            <BreakingNewsHeadline></BreakingNewsHeadline>

            <section className="mt-2 lg:hidden">
                <Carousel className="flex" responsive={responsive} infinite={true} removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}>
                    {
                        categories.map(eachCategory => <div><p>{eachCategory.category}</p></div>)
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
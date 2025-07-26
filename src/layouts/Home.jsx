import BreakingNewsHeadline from "../components/BreakingNewsHeadline";
import NavBar from "../components/NavBar";


const Home = () => {
    return (
        <>
            {/* Breaking News Headlines */}
            <BreakingNewsHeadline>

            </BreakingNewsHeadline>
            <div className="grid grid-cols-12">
                <div className="col-span-10">
                    <h1>News</h1>
                </div>
                <aside className="col-span-2">
                    <h1>Aside</h1>
                </aside>
            </div>
        </>
    );
};

export default Home;
import { useContext } from "react";
import { AutContext } from "../Context/AuthContext";
import userAvatar from "./../assets/user.png"
import BookmarkCard from "./../components/BookmarkCard"
import LoadingPage from "./../pages/LoadingPage"
import { useNavigate } from "react-router";
const Dashboard = () => {
    const { user, bookmarkedNews, loading } = useContext(AutContext);
    const navigate = useNavigate()

    if (loading) {
        return <LoadingPage></LoadingPage>
    }
    if (user) {
        return (

                <div className="md:grid flex flex-col gap-3 grid-cols-12 lg:min-h-[55vh]">
                    <section className="lg:col-span-3 md:col-span-4 col-span-6 rounded space-y-2  flex flex-col items-center p-3 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">

                        <img className="md:w-60 w-35 rounded-full" src={user?.photoURL ? user.photoURL : userAvatar} alt="" />
                        <h5 className="font-bold">{user?.displayName}</h5>
                        <p className="font-bold">Email:<span className="ml-1 font-medium">{user?.email}</span></p>
                        <p className="font-bold">Account Status:<span className="text-green-500 font-medium ml-2">{user?.emailVerified && "Verified"}</span></p>
                    </section>

                    <section className="lg:col-span-9 md:col-span-8  flex items-center flex-col p-3 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
                        <h1 className="font-bold text-xl">Bookmarked News</h1>
                        <div className="w-full grid lg:grid-cols-2 gap-2">
                            {bookmarkedNews.map(eachMarkedNews => <BookmarkCard key={eachMarkedNews._id} eachMarkedNews={eachMarkedNews}></BookmarkCard>)}

                        </div>
                    </section>
                </div>


        );
    }
    if (!user) {
        navigate('/')
    }

};

export default Dashboard;
import { useContext } from "react";
import { AutContext } from "../Context/AuthContext";
import userAvatar from "./../assets/user.png"
import BookmarkCard from "./../components/BookmarkCard"
import LoadingPage from "./../pages/LoadingPage"
import { Navigate, useLocation } from "react-router";
import { CiBookmarkRemove } from "react-icons/ci";

const Dashboard = () => {
    const { user, bookmarkedNews, loading } = useContext(AutContext);
    const location = useLocation();


    if (loading) {
        return <LoadingPage></LoadingPage>
    }
    if (user) {
        return (

            <div className="md:grid flex flex-col gap-3 grid-cols-12 lg:min-h-[55vh]">
                <section className="lg:col-span-3 md:col-span-4 col-span-6 rounded space-y-2  flex flex-col items-center p-3 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
                    <div className="border border-red-500 w-60 rounded-full overflow-hidden  h-60">
                        <img className=" " src={user?.photoURL ? user.photoURL : userAvatar} alt="" />
                    </div>

                    <h5 className="font-bold text-red-500">{user?.displayName}</h5>
                    <p className="font-bold">Email:<span className="ml-1 font-medium">{user?.email}</span></p>
                    <p className="font-bold">Account Status:<span className="text-green-500 font-medium ml-2">{user?.emailVerified && "Verified"}</span></p>
                </section>

                <section className="lg:col-span-9 md:col-span-8 md:h-auto   flex items-center flex-col p-3 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
                    <h1 className="font-bold text-xl text-red-500">Bookmarked News</h1>
                    {
                        bookmarkedNews && bookmarkedNews.length > 0 ?
                            <>
                                <div className="w-full mt-5 grid lg:grid-cols-2 gap-2">
                                    {
                                        bookmarkedNews.map(eachMarkedNews => <BookmarkCard key={eachMarkedNews._id} eachMarkedNews={eachMarkedNews}></BookmarkCard>)

                                    }
                                </div>
                            </>
                            :
                            <>
                                <div className=" h-full flex flex-col items-center justify-center mt-3">
                                    <CiBookmarkRemove className="md:mt-[-70px] text-2xl text-gray-500" ></CiBookmarkRemove>
                                    <h1 className=" text-gray-500 mt-1">Your list is empty</h1>
                                </div>
                            </>
                    }

                </section>
            </div>


        );
    }
    if (!user) {
        return <Navigate state={location.pathname} to={'/login'}></Navigate>
    }

};

export default Dashboard;
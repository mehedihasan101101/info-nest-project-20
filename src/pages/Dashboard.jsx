import { useContext } from "react";
import { AutContext } from "../Context/AuthContext";
import userAvatar from "./../assets/user.png"
import BookmarkCard from "./../components/BookmarkCard"

const Dashboard = () => {
    const { user, bookmarkedNews } = useContext(AutContext)

    return (
        <div className="grid gap-3 grid-cols-12">
            <section className="col-span-3 rounded space-y-2  flex flex-col items-center p-3 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">

                <img className="w-60 rounded-full" src={user?.photoURL ? user.photoURL : userAvatar} alt="" />
                <h5 className="font-bold">{user?.displayName}</h5>
                <p className="font-bold">Email:<span className="ml-1 font-medium">{user?.email}</span></p>
                <p className="font-bold">Account Status:<span className="text-green-500 font-medium ml-2">{user?.emailVerified && "Verified"}</span></p>
            </section>

            <section className="col-span-9 flex items-center flex-col p-3 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
                <h1 className="font-bold text-xl">Bookmarked News</h1>
                <div className="w-full grid grid-cols-2 gap-2">
                    {bookmarkedNews.map(eachMarkedNews => <BookmarkCard key={eachMarkedNews._id} eachMarkedNews={eachMarkedNews}></BookmarkCard>)}

                </div>
            </section>
        </div>
    );
};

export default Dashboard;
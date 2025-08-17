import { useContext } from "react";
import { FaEye } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { AutContext } from "../Context/AuthContext";


const BookmarkCard = ({ eachMarkedNews }) => {
    console.log(eachMarkedNews)
    const { image_url, title, author, total_view } = eachMarkedNews;

    const { bookmarkedNews, setBookmarkedNews, } = useContext(AutContext)


    function handleDelete() {
        let filteredBookmarkedNews = bookmarkedNews.filter((each) => each._id !== eachMarkedNews._id);
        setBookmarkedNews(filteredBookmarkedNews);
    }
    return (
        <div className="flex items-center justify-between w-full gap-3 bg-gray-200/40 py-3 px-3 rounded">
            <div className="flex gap-3">
                <img className="w-35 md:h-20 rounded" src={image_url} alt="" />
                <div>
                    <h5 className="font-bold">{title}</h5>
                    <p className="">Author: {author.name}</p>
                    <p className="flex items-center gap-2"><FaEye></FaEye> {total_view}</p>
                </div>
            </div>

            <button onClick={handleDelete} className="text-2xl text-red-500"><MdDeleteForever></MdDeleteForever></button>

        </div>
    );
};

export default BookmarkCard;
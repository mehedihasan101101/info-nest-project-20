import { CiBookmark } from "react-icons/ci";
import { CiShare2 } from "react-icons/ci";
import { Link } from "react-router";
import StarRatings from 'react-star-ratings';
import { FaEye } from "react-icons/fa";
import { useContext, useState } from "react";
import { IoBookmark } from "react-icons/io5";
import { AutContext } from "../Context/AuthContext";

const NewsCard = ({ eachData }) => {

    const { bookmarkedNews, setBookmarkedNews } = useContext(AutContext)
    // this variable holds the status of the news has been bookmarked or not 
    const bookmarkStatus = bookmarkedNews.some(each => each._id == eachData._id);
    // bookmark status
    const [bookmarked, setBookmarked] = useState(bookmarkStatus)

    const { author, title, image_url, details, rating, total_view } = eachData;


    function handleBookMarkedNews() {
        setBookmarked(!bookmarked)
        // when bookmark status is false ,
        if (!bookmarked) {
            setBookmarkedNews([...bookmarkedNews, eachData])

            console.log(bookmarkedNews)
        }
        // when bookmark is true
        if (bookmarked) {
            let filteredBookmarkedNews = bookmarkedNews.filter((each) => each._id !== eachData._id);
            setBookmarkedNews(filteredBookmarkedNews);
            console.log(bookmarkedNews)
        }
    }

    return (
        <div className="border flex flex-col border-gray-200 rounded ">

            <div className="flex items-center justify-between bg-[#F3F3F3] md:py-2 md:px-3 py-2 px-1">
                <div className="flex items-center gap-2">
                    <img className='rounded-full w-10' src={author.img} alt="" />
                    <div>
                        <p className="font-bold ">{author.name}</p>
                        <p className="text-[#6b6b6f]">{author.published_date}</p>
                    </div>
                </div>

                <div className="flex text-2xl font-bold text-[#6b6b6f]">
                    <Link onClick={handleBookMarkedNews}>{bookmarked ? <IoBookmark className="text-black"></IoBookmark> : <CiBookmark></CiBookmark>}</Link>
                    <Link><CiShare2></CiShare2></Link>
                </div>
            </div>
            <div className="p-2 space-y-3 flex-1">
                <h1 className="lg:text-[17px] font-extrabold">{title}</h1>
                <img className="rounded w-full  h-[160px]" src={image_url} alt="" />
                <div className=" ">
                    <p className="text-[17px] text-[#6b6b6f] hidden lg:block">{details.slice(0, 50)}...</p>
                    <p className="text-[17px] text-[#6b6b6f] lg:hidden">{details.slice(0, 100)}...</p>
                    <button> <Link to={eachData._id} className="font-bold text-red-500">Read More</Link></button>
                </div>
            </div>
            <div className="px-2">
                <hr className="text-gray-200 p" />
            </div>

            <div className="py-3 px-2 flex items-center justify-between ">

                <div className="flex items-center gap-2">
                    <StarRatings className=""
                        rating={rating.number}
                        starRatedColor="red"
                        changeRating={(newRating) => console.log(newRating)}
                        numberOfStars={5}
                        starSpacing="3px"
                        starDimension="25px"
                        name='rating'
                    />
                    <p className="text-[17px] mt-2">{rating.number}</p>
                </div>
                <div className="flex items-center gap-2 text-[#6b6b6f] mt-2">
                    <FaEye></FaEye>
                    <p>{total_view}</p>
                </div>
            </div>
        </div>

    );
};

export default NewsCard;
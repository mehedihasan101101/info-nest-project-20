import { CiBookmark } from "react-icons/ci";
import { CiShare2 } from "react-icons/ci";
import { Link } from "react-router";
import StarRatings from 'react-star-ratings';
import { FaEye } from "react-icons/fa";

const NewsCard = ({ eachData }) => {
    console.log(eachData)
    const { author, title, image_url, details, rating, total_view } = eachData;
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
                    <Link><CiBookmark></CiBookmark></Link>
                    <Link><CiShare2></CiShare2></Link>
                </div>
            </div>
            <div className="p-2 space-y-3 flex-1">
                <h1 className="lg:text-2xl text-xl font-extrabold">{title}</h1>
                <img className="rounded w-full lg:h-[230px]" src={image_url} alt="" />
                <div className=" ">
                    <p className="text-[17px] text-[#6b6b6f] hidden lg:block">{details.slice(0, 200)}...</p>
                    <p className="text-[17px] text-[#6b6b6f]">{details.slice(0, 100)}...</p>
                    <button> <Link className="font-bold text-red-500">Read More</Link></button>
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

import Marquee from "react-fast-marquee";

const BreakingNewsHeadline = () => {
    return (
        <section className="bg-[#f3f3f3] py-2 px-3 flex items-center gap-2">
            <div className="bg-red-500 inline py-2 px-4 text-white ">Latest</div>
            <Marquee pauseOnHover={true}>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui culpa nobis blanditiis voluptate aliquam aliquid et commodi repudiandae
                    aspernatur explicabo nisi, sunt cupiditate sit!
                    Tenetur hic dicta, laborum quibusdam quia architecto nostrum iure, eaque voluptatum saepe, maiores ipsa quos.</p>
            </Marquee>

        </section>
    );
};

export default BreakingNewsHeadline;
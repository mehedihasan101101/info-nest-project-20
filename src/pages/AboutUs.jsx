

const AboutUs = () => {
    return (
        <>
            <div className="bg-gray-200/50 flex flex-col items-center space-y-2 md:py-17 py-12">
                <h1 className="text-[32px] font-bold">About Us</h1>
                <p className="text-[#6b6b6f] text-center max-w-[1000px] ">Welcome to our About Us page — here, you’ll get to know everything about InfoNest.
                    Learn who we are, what drives us, and how we’re making it easier for tech enthusiasts, gamers, and professionals to choose the perfect rig</p>
            </div>
            <div className="lg:max-w-[87%] max-w-[98%] m-auto mt-5">
                <h1 className="text-2xl font-bold">About Us</h1>
                <p className="ml-2 text-justify mt-2  text-[#6b6b6f] pr-2">
                    Welcome to InfoNest – your trusted hub for news, insights, and stories that matter.
                    At InfoNest, we believe that information should be clear, reliable, and accessible to
                    everyone. Our mission is to deliver accurate reporting, thoughtful analysis, and engaging
                    stories across a wide range of topics — from world events and business to technology, culture,
                    and lifestyle.
                </p>


                <p className="ml-2 text-justify mt-2 text-[#6b6b6f] pr-2">
                    In a fast-moving world, we provide more than just headlines. We dive deeper, giving you context, perspectives, and balanced coverage so you can make informed decisions and stay ahead.
                </p>
                <p className="ml-2 text-justify mt-2 text-[#6b6b6f] pr-2">
                    <span className="font-bold text-black text-xl">Why Infonest?</span>
                    <br></br>
                    Credible & Unbiased – We uphold journalistic integrity and put facts first.
                    Comprehensive Coverage – Local and global stories, all in one place.
                    Reader-Focused – Written for clarity, accessibility, and relevance.
                    Our team is passionate about journalism and dedicated to building a space where information feels like a home — a nest of trustworthy knowledge. Whether you’re looking for breaking news or in-depth features, Infonest is here to keep you informed.
                </p>
                <div className="mt-9">
                    <h1 className="text-2xl font-bold text-center">Contact Information</h1>
                    <div className="flex lg:flex-row flex-col gap-5 justify-between mt-7 px-2  ">
                        <div className="">
                            <h1 className="font-bold">Headquarters (USA): </h1>
                            <address>
                                InfoNest Headquarters <br />
                                1234 Tech Drive, Suite 100 <br />
                                Silicon Valley, CA 94043 <br />
                                United States
                            </address>
                            <h1 className="font-bold">Portugal Office: </h1>
                            <address>
                                InfoNest Portugal  <br />
                                Rua da Tecnologia, 45, 3º Andar <br />
                                Lisboa, 1000-123
                                Portugal
                            </address>
                        </div>
                        <div>
                            <h1 className="font-bold">Phone (USA): </h1>
                            <p>+1 (555) 123-4567</p>
                            <h1 className="font-bold">Phone (Portugal):
                            </h1>
                            <p>+351 21 123 4567</p>
                            <h1 className="font-bold">Email: </h1>
                            <p>support@InfoNest.com</p>
                            <p>sales@InfoNest.com</p>
                        </div>
                        <div>
                            <h1 className="font-bold">Customer Support: </h1>
                            <p>Available Monday to Friday,<br /> 9:00 AM – 6:00 PM (PST) / 5:00 PM – 2:00 AM <br />(Portugal Time)</p>
                            <h1 className="font-bold">Support Hotline (USA):<span className=" font-medium "> +1 (555) 765-4321</span></h1>
                            <h1 className="font-bold">Support Hotline (Portugal):<span className=" font-medium "> +351 21 765 4321</span></h1>
                            <h1 className="font-bold">Live Chat:<span className=" font-medium "> Available on www.InfoNest.com</span></h1>
                        </div>
                        <div>
                            <h1 className="font-bold">Social Media: </h1>
                            <h1 className="font-bold">Twitter:<span className=" font-medium "> @InfoNest</span></h1>
                            <h1 className="font-bold">Facebook:<span className=" font-medium "> facebook.com/InfoNest</span></h1>
                            <h1 className="font-bold">Instagram:<span className=" font-medium "> @InfoNest</span></h1>
                        </div>
                    </div>

                </div>
                <div className="p-2">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d202845.2009512165!2d-122.20590430130164!3d37.40268918019431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb68ad0cfc739%3A0x7eb356b66bd4b50e!2sSilicon%20Valley%2C%20CA%2C%20USA!5e0!3m2!1sen!2spt!4v1751808084714!5m2!1sen!2spt"
                        className="w-full rounded" height="600" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div >


        </>
    );
};

export default AboutUs;
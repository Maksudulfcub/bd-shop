import logo from "../../../public/images/image006.png"
const AboutUs = () => {
    return (
        <div>
            <div className="hero">
                <div className="hero-content text-center">
                    <div className="">
                        <h1 className="text-5xl font-bold">About Us</h1>
                        <p className="py-6">
                            BDShop is a children company of CloudCore ltd.
                        </p>
                        <div>
                            <img className="w-full" src={logo} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
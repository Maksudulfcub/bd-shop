import Footer from "../Footer/Footer";
import OurProducts from "../OurProducts/OurProducts";
import Slider from "../Slider/Slider";

const Home = () => {
    return (
        <div>
            <div className="px-5 lg:px-10">
                <Slider></Slider>
                <OurProducts></OurProducts>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;
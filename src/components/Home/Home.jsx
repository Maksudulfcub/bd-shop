import AboutUs from "../AboutUs/AboutUs";
import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";
import OurProducts from "../OurProducts/OurProducts";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <OurProducts></OurProducts>
            <AboutUs></AboutUs>
            <Footer></Footer>
        </div>
    );
};

export default Home;
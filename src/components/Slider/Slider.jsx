import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import img1 from "../../../public/images/img1.jpg"
import img2 from "../../../public/images/img2.jpg"
import img3 from "../../../public/images/img3.jpg"
import img4 from "../../../public/images/img4.jpg"
import img5 from "../../../public/images/img5.jpg"
import img6 from "../../../public/images/img6.jpg"
import img7 from "../../../public/images/img7.jpg"
import img8 from "../../../public/images/img8.jpg"
import { NavLink } from 'react-router-dom';

const Slider = () => {
    return (
        <div>
            <>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper h-[100px] lg:h-[500px]">
                    <SwiperSlide className='relative'>
                        <div className="hero bg-auto min-h-screen absolute">
                            <div className="hero-content text-center">
                                <div className="max-w-md">
                                    <h1 className="text-xl lg:text-5xl font-bold">Welcome to BDShop</h1>
                                    <p className="py-6">
                                        We're happy to you're here. Check out our products, enjoy your deals and grab your offer with best prices in current market !
                                    </p>
                                    <NavLink to="/products">
                                        <button className="btn btn-primary">Buy Now</button>
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                        <img src={img1} alt="" />
                    </SwiperSlide>
                    <SwiperSlide><img src={img2} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={img3} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={img4} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={img5} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={img6} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={img7} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={img8} alt="" /></SwiperSlide>
                </Swiper>
            </>
        </div>
    );
};

export default Slider;
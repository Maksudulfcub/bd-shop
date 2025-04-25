import { NavLink } from "react-router-dom";

const Banner = () => {
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
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
        </div>
    );
};

export default Banner;
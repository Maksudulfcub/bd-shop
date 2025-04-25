import { NavLink } from "react-router-dom";
import errorImg from "../../../public/images/error.png"
const ErrorPage = () => {
    return (
        <div className="text-center space-y-5">
            <div>
                <img className="w-sm mx-auto" src={errorImg} alt="" />
            </div>
            <NavLink to="/">
                <button className="mt-5 btn btn-error text-white">Back to Home</button>
            </NavLink>
        </div>
    );
};

export default ErrorPage;
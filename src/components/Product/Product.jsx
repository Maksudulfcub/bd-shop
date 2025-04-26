import { Link } from "react-router-dom";

const Product = ({ product }) => {

    const { id, name, price } = product;
    const imgUrl = `https://admin.refabry.com/storage/product/7681_1734110373.webp`;

    return (
        <div>
            <div className="card bg-base-100 lg:w-96 shadow-sm border border-gray-200 hover:shadow-lg hover:shadow-blue-300">
                <figure className="lg:px-10 lg:pt-10">
                    <img
                        src={imgUrl}
                        alt="product"
                        className="rounded-xl w-[100px] lg:w-[200px]" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <h3>Price : {price}/- BDT</h3>
                    <div className="card-actions mt-3">
                        <Link to={`/product/${id}`}>
                            <button className="btn btn-primary">View Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;
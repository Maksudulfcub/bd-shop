import { useLoaderData, useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

const ProductDetails = () => {

    const data = useLoaderData()
    // console.log('loaded data', data.data.data);
    const products = data.data.data;
    const { id } = useParams();
    const idInt = parseInt(id)
    const product = products.find(product => product.id === idInt)

    const productImg = `https://admin.refabry.com/storage/product/7681_1734110373.webp`;

    const toastify = () => toast("Added to cart successfully !")

    return (
        <div className="px-5 lg:px-10 lg:mt-10">
            <div>
                <div className="hero bg-base-200 min-h-screen">
                    <div className="hero-content flex-col lg:flex-row">
                        <img
                            src={productImg}
                            className="max-w-sm rounded-lg shadow-lg w-[100px] lg:w-[300px]"
                        />
                        <div>
                            <h1 className="text-xl lg:text-5xl font-bold">{product.name}</h1>

                            <h2 className="text-2xl py-3 font-bold"><span className="font-bold">Price : </span>{product.price}/- BDT</h2>

                            <p className="py-3"><span className="font-bold">Description : </span>{product.short_desc}</p>

                            <p className="py-3"><span className="font-bold">Stock available : </span>{product.stock} piece only</p>

                            <p className="py-3"><span className="font-bold">Product code : </span>{product.code}</p>

                            <p className="py-3"><span className="font-bold">Discount available : </span>{product.discount_amount}/- Taka</p>

                            <button onClick={toastify} className="btn btn-primary">Add to cart</button>

                            <ToastContainer />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
import { useEffect, useState } from "react";
import Product from "../Product/Product";

const OurProducts = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://admin.refabry.com/api/all/product/get')
            .then(res => res.json())
            .then(data => setProducts(data.data.data))
    }, [])

    return (
        <div>
            <div className="hero mt-5">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-xl lg:text-5xl font-bold">Our Products</h1>
                        <p className="py-6 text-gray-500">
                            Check out all products and click one of them to view details info of each product.
                        </p>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    products.map(product => <Product key={product.id} product={product}></Product>)
                }
            </div>
        </div>
    );
};

export default OurProducts;
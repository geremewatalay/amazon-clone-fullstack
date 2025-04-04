import { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "./ProductCard"; // Ensure this component exists

function Product() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios
            .get("https://fakestoreapi.com/products")
            .then((res) => {
                setProducts(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <section>
            {products.map((singleProduct) => (
                <ProductCard product={singleProduct} key={singleProduct.id} />
            ))}
        </section>
    );
}

export default Product;

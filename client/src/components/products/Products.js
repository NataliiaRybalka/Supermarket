import React, {useContext, useEffect} from "react";
import {MainContext} from "../../context";

export default function Products() {

    const {products, getAllProducts} = useContext(MainContext);

    useEffect(() => {
        getAllProducts();
    }, []);

    return (
        <div>
            {products.map(product => (

                <h3> {product.name}</h3>

            ))}
        </div>

    )
}


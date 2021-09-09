import React, {useContext, useEffect} from "react";
import {MainContext} from "../../context";
import { Link } from 'react-router-dom';

export default function Fruits() {

    const {products, getAllProducts} = useContext(MainContext);

    useEffect(() => {
        getAllProducts();
    }, []);

    return (
        <div>
            {products.map(product => (
                <Link to={`/${product.nameEnglish}`} key={product._id}>
                    <div>
                        <h3> {product.name} </h3>
                    </div>
                </Link>
            ))}
        </div>
    )
}
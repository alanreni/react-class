import React from 'react';
import {Link} from "react-router-dom";

const ProductCard = ({ id, name, imageURL, price }) => {

    return (
        <Link to={`/product/${id}`}>
            {imageURL ? (
                <img src={imageURL} alt="" />
            ) : (
                <div>Placeholder</div>
            )}
            <div className="md:text-red-500 border-purple-500 text-lg text-left md:text-center font-semibold p-2 rounded-lg border shadow">
                {name}
            </div>
            <div>Rs. {price}</div>
        </Link>
    );

};

export default ProductCard;
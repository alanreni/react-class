import React from 'react';
<<<<<<< HEAD
import { Link } from 'react-router-dom';
=======
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
>>>>>>> 6559233fd406f193f778b791a406603d9d909edd

const ProductCard = ({ id, name, imageUrl }) => {
  return (
    <div className="max-w-xs bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <Link to={`/product/${id}`}>
        <img 
          src={imageUrl} 
          alt={name} 
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h2 className="text-lg font-semibold text-gray-800">{name}</h2>
        </div>
      </Link>
      <div className="px-4 pb-4">
        <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-200">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;

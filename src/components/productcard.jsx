// write product card here
import React from "react";
import ViewProductButton from "../components/button";

const Productcard = () => {
  // Static product details
  const productImage = "https://via.placeholder.com/150";
  const productName = "Sample Product";
  const productPrice = "$99.99";

  return (
    <div className="border rounded-lg shadow-lg p-4 w-80 bg-white">
      <img src={productImage} alt={productName} className="w-full h-48 object-cover rounded-md" />
      <h2 className="text-lg font-bold mt-2">{productName}</h2>
      <p className="text-gray-600 mt-1">{productPrice}</p>
      <div className="mt-4">
        <ViewProductButton />
      </div>
    </div>
  );
};

export default Productcard;

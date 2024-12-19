import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";
import { ProductContext } from "../contexts/ProductContext";
const ProductDetails = () => {
  const { id } = useParams();
  const { products } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);

  const product = products.find((item) => {
    return item.id === parseInt(id);
  });
  if (!product) {
    return (
      <section className="h-screen flex justify-center items-center">
        Loading...
      </section>
    );
  }
  const { title, price, description, image } = product;
  return (
    <section className="pt-16 pb-8 lg:py-32 h-full">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="flex-1 flex justify-center">
            <img
              src={image}
              alt=""
              className="max-w-[150px] lg:max-w-[300px]"
            />
          </div>
          <div className="flex-1 text-center lg:text-left px-4 lg:px-0">
            <h1 className="text-[20px] md:text-[26px] font-medium mb-4">
              {title}
            </h1>
            <div className="text-lg md:text-xl text-red-500 font-medium mb-6">
              ${price}
            </div>
            <p className="text-sm md:text-base mb-8">{description}</p>
            <button className="bg-black py-3 px-6 text-white">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;

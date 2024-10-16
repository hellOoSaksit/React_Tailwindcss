import React, { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";
import Product from "../components/Product";
import Hero from '../components/Hero';
const Home = () => {
  const { products } = useContext(ProductContext);
  
  // console.log(products); // ตรวจสอบข้อมูลที่ถูกดึงมา

  const filterdProducts = products.filter((item) => {
    // return item.category === "";
    return item;
  });

  return (
    <div>
      <Hero/>
      <section className="py-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm max-auto md:max-w-none md:mx-0">
            {filterdProducts.map((product) => {
              return (
                // ส่ง product ไปยังคอมโพเนนต์ Product
                <Product key={product.id} product={product} />
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

import React, { Suspense, useEffect, useState } from "react";
import Hero from "../Components/Hero";
import Products from "./Products";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("errrrr :", err);
        setLoading(false);
      });
  }, []);
  return (
    <div className="w-11/12 mx-auto">
      <Hero></Hero>
      <div className="mt-10 grid grid-cols-12 gap-6">
     
        {/* here is sidebar */}
        <aside className="col-span-3">
          <h1>sidebar will render here</h1>
        </aside>

        {/* Products grid */}
        <div className="col-span-9">
          {loading ? (
            <div className="text-center py-20">Loading products...</div>
          ) : (
            <Products products={products}></Products>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;

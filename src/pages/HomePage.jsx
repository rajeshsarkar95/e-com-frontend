import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";

function HomePage() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("https://e-com-backend-rjun.onrender.com/api/products/products")
      .then((res) => {
        console.log("API raw response:", res.data);
        const responseData = res.data;
        const items =
          responseData.products ??
          (Array.isArray(responseData) ? responseData : []);
        setProducts(items);
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
        setProducts([]);
      });
  }, []);

  return (
    <>
      <div className="px-4 py-6 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {Array.isArray(products) && products.length > 0 ? (
            products.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))
          ) : (
            <div className="col-span-full text-center py-8">
              <p className="text-lg text-red-600 font-medium">
                No products available.
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
export default HomePage;

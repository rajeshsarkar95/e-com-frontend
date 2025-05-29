import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    if (!id) return;
    setLoading(true);
    axios
      .get(`https://e-com-backend-rjun.onrender.com/api/products/products/${id}`)
      .then((res) => {
        console.log("API Response:", res.data);
        setProduct(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching product:", error);
        setProduct(null);
        setLoading(false);
      });
  }, [id]);
  console.log("Product ID from URL:", id);
  console.log("Type of product:", typeof product);
  if (loading) {
    return (
      <div className="text-center p-10 text-gray-500">
        Loading product details...
      </div>
    );
  }
  if (!product || typeof product !== "object") {
    return (
      <div className="text-center p-10 text-red-600">Product not found.</div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto mt-12 p-6 bg-white shadow-2xl rounded-2xl transition-transform duration-300 hover:scale-[1.01]">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-72 object-fill rounded-lg mb-6 shadow-md"
      />
      <h2 className="text-4xl font-extrabold text-gray-800 mb-2">
        {product.name}
      </h2>
      <p className="text-2xl text-emerald-600 font-bold mb-4">
        ${product.price}
      </p>

      <p className="text-base text-gray-600 leading-relaxed mb-6">
        {product.description || "No description available."}
      </p>
      <Link
        to="/"
        className="inline-block px-4 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors"
      >
        ← Back to Products
      </Link>
    </div>
  );
}

export default ProductPage;

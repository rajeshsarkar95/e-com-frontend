import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="border rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 p-5 bg-gradient-to-br from-white via-gray-50 to-white">
  <div className="overflow-hidden rounded-xl mb-4">
    <img
      src={product.image}
      alt={product.name}
      className="w-full h-48 object-fill transform hover:scale-105 transition-transform duration-300"
    />
  </div>
  <h2 className="text-xl font-bold text-gray-900 mb-1 tracking-tight">
    {product.name}
  </h2>
  <p className="text-lg text-emerald-600 font-semibold mb-4">
    ${product.price}
  </p>

  {/* View Details Link */}
  <Link
    to={`/product/${product._id}`}
    className="inline-block bg-blue-600 text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors mr-2"
  >
    View Details
  </Link>

  {/* Add to Cart Button */}
  <button
     onClick={() => addToCart(product)}
    className="inline-block bg-emerald-600 text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors mt-2"
  >
    Add to Cart
  </button>
</div>


  );
}

export default ProductCard;

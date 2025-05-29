import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="border rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 p-6 bg-gradient-to-br from-white via-gray-50 to-white hover:scale-[1.01] group">
      <div className="overflow-hidden rounded-2xl mb-5">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-52 object-fill rounded-2xl transform group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <h2 className="text-2xl font-semibold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors">
        {product.name}
      </h2>

      <p className="text-lg text-emerald-600 font-bold mb-5">
        ${product.price}
      </p>
      <div className="flex flex-wrap gap-3">
        <Link
          to={`/product/${product._id}`}
          className="bg-blue-600 text-white text-sm font-medium px-5 py-2 rounded-full hover:bg-blue-700 transition-colors"
        >
          View Details
        </Link>
        <button
          onClick={() => addToCart(product)}
          className="bg-emerald-600 text-white text-sm font-medium px-5 py-2 rounded-full hover:bg-emerald-700 transition-colors"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;

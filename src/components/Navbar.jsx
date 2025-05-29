import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ShoppingCart } from "lucide-react";
import { useCart } from "../context/CartContext.jsx";

export default function Navbar() {
  const { cartItems } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);
  const cartItemCount = cartItems.length;

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-2xl font-bold text-emerald-600">
            ShopEase
          </Link>
          <div className="hidden md:flex space-x-6 items-center">
            <Link
              to="/"
              className="text-gray-700 hover:text-emerald-600 font-medium"
            >
              Home
            </Link>
            <Link
              to="/products"
              className="text-gray-700 hover:text-emerald-600 font-medium"
            >
              Products
            </Link>
            <Link
              to="/about"
              className="text-gray-700 hover:text-emerald-600 font-medium"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-gray-700 hover:text-emerald-600 font-medium"
            >
              Contact
            </Link>
            <Link
              to="/login"
              className="text-gray-600 hover:text-emerald-600 font-medium"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="px-4 py-2 bg-emerald-600 text-white rounded-md hover:bg-emerald-700 transition"
            >
              Sign Up
            </Link>
            <Link
              to="/cart"
              className="relative text-gray-700 hover:text-emerald-600"
            >
              <ShoppingCart className="w-6 h-6" />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1 rounded-full">
                {cartItemCount}
              </span>
            </Link>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-gray-700 hover:text-emerald-600"
            >
              {menuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="md:hidden flex flex-col space-y-4 mt-4 pb-4 border-t pt-4">
            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className="text-gray-700 hover:text-emerald-600 font-medium"
            >
              Home
            </Link>
            <Link
              to="/products"
              onClick={() => setMenuOpen(false)}
              className="text-gray-700 hover:text-emerald-600 font-medium"
            >
              Products
            </Link>
            <Link
              to="/about"
              onClick={() => setMenuOpen(false)}
              className="text-gray-700 hover:text-emerald-600 font-medium"
            >
              About
            </Link>
            <Link
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className="text-gray-700 hover:text-emerald-600 font-medium"
            >
              Contact
            </Link>
            <Link
              to="/cart"
              onClick={() => setMenuOpen(false)}
              className="text-gray-700 hover:text-emerald-600 font-medium flex items-center"
            >
              <ShoppingCart className="w-5 h-5 mr-2" />
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1 rounded-full">
                  {cartItems.reduce((total, item) => total + item.quantity, 0)}
                </span>
              )}
            </Link>

            <Link
              to="/login"
              onClick={() => setMenuOpen(false)}
              className="text-gray-600 hover:text-emerald-600 font-medium"
            >
              Login
            </Link>
            <Link
              to="/register"
              onClick={() => setMenuOpen(false)}
              className="px-4 py-2 bg-emerald-600 text-white rounded-md hover:bg-emerald-700 transition text-center"
            >
              Sign Up
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}

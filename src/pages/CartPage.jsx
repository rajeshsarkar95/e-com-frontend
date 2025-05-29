import { useCart } from "../context/CartContext";

function CartPage() {
  const { cartItems, removeFromCart, totalPrice } = useCart();

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="grid gap-6">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center border rounded-lg shadow-sm p-4"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-24 h-24 object-cover rounded-md"
              />
              <div className="ml-4 flex-1">
                <h2 className="text-xl font-semibold">{item.title}</h2>
                <p className="text-gray-600">Price: ₹{item.price}</p>
                <p className="text-gray-600">Quantity: {item.quantity}</p>
                <p className="text-gray-800 font-medium">
                  Subtotal: ₹{item.price * item.quantity}
                </p>
              </div>
              <button
                onClick={() => removeFromCart(item._id)}
                className="text-red-500 hover:underline"
              >
                Remove
              </button>
            </div>
          ))}
          <div className="text-right border-t pt-4 mt-6">
            <h2 className="text-2xl font-bold">
              Total: ₹{totalPrice.toFixed(2)}
            </h2>
          </div>
        </div>
      )}
    </div>
  );
}

export default CartPage;

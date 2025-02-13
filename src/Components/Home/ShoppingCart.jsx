import React, { useContext } from "react";
import { CartContext } from "../../Context/CartContext"; // تحقق من المسار الصحيح

const ShoppingCart = () => {
  // إعطاء قيمة افتراضية لـ cart لتجنب قراءة undefined
  const { cart = [] } = useContext(CartContext);

  return (
    <div className="container mt-4">
      <h2>Shopping Cart</h2>
      {cart.length > 0 ? (
        cart.map((item) => (
          <div key={item.id}>
            <video src={item.image} alt={item.name || "https://youtu.be/Z2ZgGiAmaa4?si=yjVueKSiQd6Y7GZo"} />
            <h4>{item.name}</h4>
            <p>{item.price}</p>
          </div>
        ))
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
};

export default ShoppingCart;

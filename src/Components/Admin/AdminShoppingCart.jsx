// src/Components/AdminShoppingCartPage.jsx
import React, { useContext } from "react";
import { CartContext } from "../../Context/CartContext";

const AdminShoppingCartPage = () => {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);

  return (
    <div className="container mt-4">
      <h2>Admin Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>No courses in cart</p>
      ) : (
        <div className="row">
          {cart.map((course) => (
            <div key={course.id} className="col-md-4 col-lg-3 mb-4">
              <div className="card shadow-sm">
                <video
                  src={course.image || "https://youtu.be/VrVweQvzKeg?si=3Fs67hG37fBUcDkd"}
                  className="card-img-top"
                  alt={course.name || "https://youtu.be/VrVweQvzKeg?si=3Fs67hG37fBUcDkd"}
                  height="150px"
                />
                <div className="card-body">
                  <h5 className="card-title">{course.name}</h5>
                  <p className="card-text">{course.description}</p>
                  <button
                    className="btn btn-danger"
                    onClick={() => removeFromCart(course.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      {cart.length > 0 && (
        <div className="mt-3">
          <button className="btn btn-warning" onClick={clearCart}>
            Clear Cart
          </button>
        </div>
      )}
    </div>
  );
};

export default AdminShoppingCartPage;

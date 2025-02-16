import React, { useContext } from "react";
import { CartContext } from "../../Context/CartContext"; // تحقق من المسار الصحيح

const ShoppingCart = () => {
  const { cart = [], removeFromCart } = useContext(CartContext);

  return (
    <div className="container mt-4">
      <h2>Shopping Cart</h2>
      {cart.length > 0 ? (
        <div className="row">
          {cart.map((item) => (
            <div key={item.id} className="col-md-4 col-lg-3 mb-4">
              <div className="card shadow-sm">
              
                {item.image ? (
                  <video
                    src={item.image||"https://www.youtube.com/embed/Z2ZgGiAmaa4?si=yjVueKSiQd6Y7GZo"}
                    alt={"https://www.youtube.com/embed/Z2ZgGiAmaa4?si=yjVueKSiQd6Y7GZo"}
                    className="card-img-top"
                    height="200px"
                    controls
                    autoPlay
                    controlsList="nodownload"
                  />
                ) : (
                  <video
                    src={item.video || "https://youtu.be/Z2ZgGiAmaa4?si=yjVueKSiQd6Y7GZo"}
                    className="card-img-top"
                    height="200px"
                    controls
                  />
                )}

                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">{item.price || "770 $"}</p>
                  <button
                    className="btn btn-danger"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                  <button
                    className="btn  text-dark ms-2 bg-btn-#ff9500" style={{ backgroundColor: "#ff9500" }} 
                    onClick={() => Navigator ("/payment")}
                  >
                    Pay
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
};

export default ShoppingCart;







// import React, { useContext } from "react";
// import { CartContext } from "../../Context/CartContext"; // تحقق من المسار الصحيح

// const ShoppingCart = () => {

//   const { cart = [] } = useContext(CartContext);

//   return (
//     <div className="container mt-4">
//       <h2>Shopping Cart</h2>
//       {cart.length > 0 ? (
//         cart.map((item) => (
//           <div key={item.id}>
//             <video src={item.image||"https://youtu.be/Z2ZgGiAmaa4?si=yjVueKSiQd6Y7GZo"} alt={item.name || item.video} />
//             <h4>{item.name}</h4>
//             <p>{item.price||"Free"}</p>
//           </div>
//         ))
//       ) : (
//         <p>Your cart is empty.</p>
//       )}
//     </div>
//   );
// };

// export default ShoppingCart;

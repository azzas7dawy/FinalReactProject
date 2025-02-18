import React, { useContext } from "react";
import { CartContext } from "../../Context/CartContext"; 

const ShoppingCart = () => {
  
  const { cart = [] } = useContext(CartContext);

  return (
    <div className="container mt-4">
      <h2>Shopping Cart</h2>
      {cart.length > 0 ? (
        cart.map((item) => (
          <div key={item.id}>
            <video src={item.image || item.video} alt={item.name || "https://youtu.be/Z2ZgGiAmaa4?si=yjVueKSiQd6Y7GZo"} />
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

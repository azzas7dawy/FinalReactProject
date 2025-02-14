import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import "./PaymentPage.css";
// import { CiTextAlignCenter } from "react-icons/ci";
// import { BsDisplay } from "react-icons/bs";
// import { CgDisplayFlex } from "react-icons/cg";



const PaymentPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const plan = location.state?.plan || { title: "Unknown", price: "$0" };
  const [payPalVisible, setPayPalVisible] = useState(false); // state to control PayPal visibility

  const handlePayment = (method) => {
    console.log(`You have chosen to pay with ${method} for the ${plan.title} plan.`);
    if (method === "PayPal") {
      setPayPalVisible(true); // Show PayPal button when PayPal is selected
    } else {
    
    }
  };

  const handleApprove = (data, actions) => {
    return actions.order.capture().then((details) => {
      // alert("Payment Successful", details);
      setPayPalVisible(false); 
      navigate("/");
    });
  };

  const handleError = (error) => {
    console.error("Payment Error", error);
    setPayPalVisible(false);
  };

  return (
    <div className="payment-container">
      <h1 className="payment-title">Payment Options</h1>
      <p className="payment-subtitle">
        You are subscribing to the <strong>{plan.title}</strong> plan for <strong>{plan.price}</strong>.
      </p>

      <div className="payment-methods">
        <button className="payment-button" onClick={() => handlePayment("Credit Card")}>
          Pay with Credit Card
        </button>
        <button className="payment-button" onClick={() => handlePayment("PayPal")}>
          Pay with PayPal
        </button>
        <button className="payment-button" onClick={() => handlePayment("Google Pay")}>
          Pay with Google Pay
        </button>
      </div>

     
      {payPalVisible && (
        <PayPalScriptProvider options={{ "client-id": "Aeg9e_eOmy4ww-htR1PHjUtVSmE4_3VSIxCutgYhhtGFPeXUAYl2Eqw_MttPA3IA9HN8xMBo-FLBEUST" }}>
          <PayPalButtons
            style={{ layout: "vertical", shape: "rect" , label: "pay" ,jastifyContent: "center" ,CiTextAlignCenter: "center",alignItems: "center",CgDisplayFlex: "center"}}
            createOrder={(data, actions) => {
              return actions.order.create({
                purchase_units: [
                  {
                    amount: {
                      value: plan.price.replace('$', ''), // use the actual plan price
                    },
                  },
                ],
              });
            }}
            onApprove={handleApprove}
            onError={handleError}
          />
        </PayPalScriptProvider>
      )}

      <button className="back-button" onClick={() => navigate("/")}>
        Go Back
      </button>
    </div>
  );
};

export default PaymentPage;

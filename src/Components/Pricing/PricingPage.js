
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; //  useNavigate
import "./PricingPage.css";

const plans = {
  monthly: [
    { title: "Free", price: "$0", features: ["✅Available Features", "✅Basic Support", "✅Limited Course Access", "✅Community Access", "❌No Certification", "✅Access to Free Webinars"] },
    { title: "Pro", price: "$79", features: ["✅Advanced Features", "✅Priority Support", "✅Unlimited Course Access", "✅Exclusive Webinars", "✅Certification upon Completion", "✅1-on-1 Mentorship", "✅Access to Premium Resources"] },
  ],
  yearly: [
    { title: "Free", price: "$0", features: ["Available Features", "Basic Support", "Limited Course Access", "Community Access", "No Certification", "Access to Free Webinars"] },
    { title: "Pro", price: "$799", features: ["Advanced Features", "Priority Support", "Unlimited Course Access", "Exclusive Webinars", "Certification upon Completion", "1-on-1 Mentorship", "Early Access to New Courses", "Discount on Future Courses"] },
  ],
};

function PricingPage() {
  const [selectedBillingCycle, setSelectedBillingCycle] = useState("monthly");
  const [billingCycle, setBillingCycle] = useState("monthly");
  const navigate = useNavigate(); //  useNavigate

  useEffect(() => {
    const storedBillingCycle = localStorage.getItem("billingCycle");
    if (storedBillingCycle) setSelectedBillingCycle(storedBillingCycle);
    const storedCycle = localStorage.getItem("billingCycle");
    if (storedCycle) setBillingCycle(storedCycle);
  }, []);

  const toggleBillingCycle = () => {
    const newBillingCycle = selectedBillingCycle === "monthly" ? "yearly" : "monthly";
    setSelectedBillingCycle(newBillingCycle);
    localStorage.setItem("billingCycle", newBillingCycle);
    const newCycle = billingCycle === "monthly" ? "yearly" : "monthly";
    setBillingCycle(newCycle);
    localStorage.setItem("billingCycle", newCycle);
  };

  const handleSubscription = (plan) => {
    navigate("/payment", { state: { plan } }); 
  };

  return (
    <div className="pricing-container">
      <h1 className="pricing-title">Pricing</h1>
      <p className="pricing-subtitle">Choose a plan that fits your needs.</p>

      <div className="toggle-container">
        <button className="toggle-button" onClick={toggleBillingCycle}>
          {selectedBillingCycle === "monthly" ? "Switch to Yearly" : "Switch to Monthly"}
          Switch to {billingCycle === "monthly" ? "Yearly" : "Monthly"}
        </button>
      </div>

      <div className="plans-container">
        {plans[billingCycle].map((plan, index) => (
          <div key={index} className="plan-card">
            <h2 className="plan-title">{plan.title}</h2>
            <p className="plan-price">{plan.price}</p>
            <ul className="plan-features">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="plan-feature">{feature}</li>
              ))}
            </ul>
            <button className="subscribe-button" onClick={() => handleSubscription(plan)}>
              Subscribe
            </button>
          </div>
        ))}
      </div>

      <div className="faq-container">
        <h3 className="faq-title">Frequently Asked Questions</h3>
        <ul className="faq-list">
          <li>Can I cancel my subscription at any time?</li>
          <li>Do I get discounts for student licenses?</li>
          <li>What kind of support do I receive with the Pro plan?</li>
          <li>Is there a free trial available?</li>
          <li>Can I switch between plans later?</li>
          <li>Are there any hidden fees?</li>
          <li>How secure is my payment information?</li>
        </ul>
      </div>
    </div>
  );
}

export default PricingPage;

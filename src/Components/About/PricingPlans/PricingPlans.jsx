import React from "react";

const pricingPlans = [
  {
    name: "Basic Plan",
    price: "Free",
    features: [
      "Access to free courses",
      "Limited course materials",
      "No certification",
    ],
  },
  {
    name: "Standard Plan",
    price: "$19.99/month",
    features: [
      "Access to all courses",
      "Course materials included",
      "Certification upon completion",
      "Email support",
    ],
  },
  {
    name: "Premium Plan",
    price: "$49.99/month",
    features: [
      "Access to all courses",
      "Downloadable course materials",
      "Certification + project-based learning",
      "One-on-one mentorship",
      "Priority support",
    ],
  },
];

const PricingPlans = () => {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">💰 Pricing Plans</h2>
      <div className="row">
        {pricingPlans.map((plan, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card shadow-lg">
              <div className="card-body text-center">
                <h3 className="card-title">{plan.name}</h3>
                <h4 className="text-primary">{plan.price}</h4>
                <ul className="list-unstyled">
                  {plan.features.map((feature, i) => (
                    <li key={i}>✔ {feature}</li>
                  ))}
                </ul>
                <button className="btn btn-success">Get Started</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingPlans;

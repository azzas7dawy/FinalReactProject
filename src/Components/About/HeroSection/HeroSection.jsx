// src/components/HeroSection.js
import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-warning text-white text-center py-5">
      <div className="container">
        <h1 className="display-4">Learn Anything, Anytime, Anywhere</h1>
        <p className="lead">Join our platform to enhance your skills with the best courses.</p>
        <button className="btn btn-light btn-lg">Browse Courses</button>
      </div>
    </section>
  );
};

export default HeroSection;
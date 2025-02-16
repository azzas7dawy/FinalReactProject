import React from 'react';import {   FaHandshake } from "react-icons/fa";
import { MdOutlineSchool, MdLightbulbOutline } from "react-icons/md";
import { FiTrendingUp } from "react-icons/fi";
import "./aboutus.css";

export default function OurGoals() {
  return (
    <div className="p-5"><section>
    <h3>Our Goals</h3>
    <div className="grid grid-md-2">
      <div className="card">
        <MdOutlineSchool className="icon" />
        <h4>Provide Practical Skills</h4>
        <p>
          Our goal is to equip students with real-world skills that are
          immediately applicable in their careers, ensuring success in the
          job market.
        </p>
      </div>
      <div className="card">
        <MdLightbulbOutline className="icon" />
        <h4>Foster Creative Problem-Solving</h4>
        <p>
          We encourage students to think critically, develop problem-solving
          skills, and approach challenges with confidence and creativity.
        </p>
      </div>
      <div className="card">
        <FaHandshake className="icon" />
        <h4>Promote Collaboration and Community</h4>
        <p>
          Learning is more effective in a supportive environment. We foster
          a strong community where students and professionals can connect,
          share knowledge, and grow together.
        </p>
      </div>
      <div className="card">
        <FiTrendingUp className="icon" />
        <h4>Stay Ahead of the Curve</h4>
        <p>
          The digital landscape is constantly evolving, and our courses are
          designed to keep students updated with the latest industry trends
          and technologies.
        </p>
      </div>
    </div>
  </section>
  
  <div className="mt-5 text-center">
    <h3>Together, let's shape the future of digital innovation</h3>
    <p>
      Join us on this exciting journey and unlock your full potential in the
      world of design and development.  
    </p>
    <button className="button">
      Join Now
    </button>
  </div></div>
  )
}

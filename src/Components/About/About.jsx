
import React from "react";
import { useSelector } from "react-redux";
import { 
  FaTrophy, 
  FaUsers, 
  FaComments, 
  FaHandshake 
} from "react-icons/fa";
import { 
  MdOutlineSchool, 
  MdLightbulbOutline 
} from "react-icons/md";
import { FiTrendingUp } from "react-icons/fi";
import "./aboutus.css";

const AboutUs = () => {
 
  const { content } = useSelector((state) => state.lang);

  return (
    <div className="container">
      <h2>{content.About || "About Us"}</h2>
      
      <p>
        {content.about || 
          "Welcome to our platform, where we are passionate about empowering individuals to reach their full potential. We offer cutting-edge courses and a dynamic learning environment to help students excel in the digital world."}
      </p>
      
      <section>
        <h3>{content.achievementsTitle || "Achievements"}</h3>
        <div className="grid grid-md-2">
          <div className="card">
            <FaUsers className="icon" />
            <h4>{content.trustedByThousands || "Trusted by Thousands"}</h4>
            <p>
              {content.trustedDesc || 
                "We have successfully educated thousands of students, helping them gain essential skills and advance their careers globally."}
            </p>
          </div>
          <div className="card">
            <FaTrophy className="icon" />
            <h4>{content.awardWinningCourses || "Award-Winning Courses"}</h4>
            <p>
              {content.awardDesc || 
                "Our courses are recognized for their excellence and innovation in the industry, providing the latest skills and best teaching methodologies."}
            </p>
          </div>
          <div className="card">
            <FaComments className="icon" />
            <h4>{content.positiveFeedback || "Positive Student Feedback"}</h4>
            <p>
              {content.feedbackDesc ||
                "Our students consistently praise our courses for their depth, interactivity, and effectiveness in real-world applications."}
            </p>
          </div>
          <div className="card">
            <FaHandshake className="icon" />
            <h4>{content.industryPartnerships || "Industry Partnerships"}</h4>
            <p>
              {content.partnershipsDesc ||
                "We collaborate with top industry leaders, ensuring our students receive relevant, up-to-date education and career opportunities."}
            </p>
          </div>
        </div>
      </section>
      
      <section>
        <h3>{content.ourGoalsTitle || "Our Goals"}</h3>
        <div className="grid grid-md-2">
          <div className="card">
            <MdOutlineSchool className="icon" />
            <h4>{content.providePracticalSkills || "Provide Practical Skills"}</h4>
            <p>
              {content.practicalSkillsDesc ||
                "Our goal is to equip students with real-world skills that are immediately applicable in their careers, ensuring success in the job market."}
            </p>
          </div>
          <div className="card">
            <MdLightbulbOutline className="icon" />
            <h4>{content.fosterProblemSolving || "Foster Creative Problem-Solving"}</h4>
            <p>
              {content.problemSolvingDesc ||
                "We encourage students to think critically, develop problem-solving skills, and approach challenges with confidence and creativity."}
            </p>
          </div>
          <div className="card">
            <FaHandshake className="icon" />
            <h4>{content.promoteCollaboration || "Promote Collaboration and Community"}</h4>
            <p>
              {content.collaborationDesc ||
                "Learning is more effective in a supportive environment. We foster a strong community where students and professionals can connect, share knowledge, and grow together."}
            </p>
          </div>
          <div className="card">
            <FiTrendingUp className="icon" />
            <h4>{content.stayAhead || "Stay Ahead of the Curve"}</h4>
            <p>
              {content.aheadDesc ||
                "The digital landscape is constantly evolving, and our courses are designed to keep students updated with the latest industry trends and technologies."}
            </p>
          </div>
        </div>
      </section>
      
      <div className="mt-12 text-center">
        <h3>{content.futureTitle || "Together, let's shape the future of digital innovation"}</h3>
        <p>
          {content.futureDesc ||
            "Join us on this exciting journey and unlock your full potential in the world of design and development."}
        </p>
        <button
          className="button"
          onClick={() => {
            window.location.href = "/register";
          }}
        >
          {content.joinNow || "Join Now"}
        </button>
      </div>
    </div>
  );
};

export default AboutUs;

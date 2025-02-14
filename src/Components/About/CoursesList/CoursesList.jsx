import React from "react";

const courses = {
  "Web Development": [
    {
      id: 1,
      title: "React for Beginners",
      price: "$49.99",
      description: "Learn the basics of React and build dynamic web apps.",
      time: "10 hours",
      trainer: "John Doe",
    },
    {
      id: 2,
      title: "Full Stack Development",
      price: "$99.99",
      description: "Master front-end and back-end development using MERN stack.",
      time: "20 hours",
      trainer: "Jane Smith",
    },
    {
      id: 3,
      title: "Responsive Web Design",
      price: "$39.99",
      description: "Build mobile-friendly websites using HTML, CSS, and Bootstrap.",
      time: "8 hours",
      trainer: "Emily Davis",
    },
  ],
  "Data Science": [
    {
      id: 4,
      title: "Python for Data Science",
      price: "$59.99",
      description: "Analyze and visualize data using Python libraries.",
      time: "12 hours",
      trainer: "Dr. Ahmed Saadi",
    },
    {
      id: 5,
      title: "Machine Learning Fundamentals",
      price: "$79.99",
      description: "Learn machine learning algorithms and implementation.",
      time: "15 hours",
      trainer: "Dr. Mohamed Ali",
    },
    {
      id: 6,
      title: "Data Visualization with Tableau",
      price: "$49.99",
      description: "Create stunning data visualizations using Tableau.",
      time: "10 hours",
      trainer: "Laura Wilson",
    },
  ],
  "Digital Marketing": [
    {
      id: 7,
      title: "SEO & Content Marketing",
      price: "$39.99",
      description: "Boost website rankings and attract organic traffic.",
      time: "8 hours",
      trainer: "Sarah Johnson",
    },
    {
      id: 8,
      title: "Social Media Advertising",
      price: "$49.99",
      description: "Create and optimize ads for Facebook, Instagram, and more.",
      time: "10 hours",
      trainer: "Mike Brown",
    },
    {
      id: 9,
      title: "Email Marketing Strategies",
      price: "$29.99",
      description: "Learn how to build high-converting email marketing campaigns.",
      time: "6 hours",
      trainer: "Jessica Lee",
    },
  ],
};

const CoursesList = () => {
  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">📚 Available Courses</h2>
      {Object.keys(courses).map((category, index) => (
        <div key={index}>
          <h3 className="mt-4">{category}</h3>
          <div className="row">
            {courses[category].map((course) => (
              <div key={course.id} className="col-md-4 mb-4">
                <div className="card shadow-sm">
                  <div className="card-body">
                    <h5 className="card-title">{course.title}</h5>
                    <h6 className="text-primary">{course.price}</h6>
                    <p className="card-text">{course.description}</p>
                    <p className="text-muted">⏳ Duration: {course.time}</p>
                    <p className="text-muted">👨‍🏫 Trainer: {course.trainer}</p>
                    <button className="btn btn-success text-center">Buy Now</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CoursesList;

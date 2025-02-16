import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const testimonials = [
  {
    name: "Sarah L",
    text:
      "The web design course provided a solid foundation for me. The instructors were knowledgeable and supportive, and the interactive learning environment was engaging. I highly recommend it!",
    fullStoryLink: "#",
  },
  {
    name: "Jason M",
    text:
      "The UI/UX design course exceeded my expectations. The instructor's expertise and practical assignments helped me improve my design skills. I feel more confident in my career now. Thank you!",
    fullStoryLink: "#",
  },
  {
    name: "Emily R",
    text:
      "I enrolled in the graphic design course as a beginner, and it was the perfect starting point. The instructor's guidance and feedback improved my design abilities significantly. I'm grateful for this course!",
    fullStoryLink: "#",
  },
  {
    name: "Michael K",
    text:
      "The mobile app development course was fantastic! The step-by-step tutorials and hands-on projects helped me grasp the concepts easily. I'm now building my own app. Great course!",
    fullStoryLink: "#",
  },
];

const Testimonials = () => {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">💬 Our Testimonials</h2>
      <div className="row">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="col-md-6 mb-4">
            <div className="card shadow-sm">
              <div className="card-body">
                <p className="card-text">{testimonial.text}</p>
                <p className="card-footer text-muted text-right">
                  - {testimonial.name}{" "}
                  <a href={testimonial.fullStoryLink}>Read Full Story</a>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-4">
        <button className="btn btn-primary">View All</button>
      </div>
    </div>
  );
};

export default Testimonials;

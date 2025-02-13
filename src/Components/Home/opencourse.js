// import React from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';

// const CourseSection = () => {
//   return (
//     <div className="container-fluid p-0">
//       {/* Video Section */}
//       <div className="position-relative mx-auto" style={{ width: "80%", height: "60vh" }}>
//         <video className="w-100 h-100 object-fit-cover" autoPlay loop muted>
//           <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>
//         <div className="position-absolute top-50 start-50 translate-middle text-white text-center">
//           <h1 className="fw-bold">UI/UX Design Course</h1>
//         </div>
//       </div>
      
//       {/* Course Steps */}
//       <div className="container py-5">
//         <div className="row g-4">
//           {[
//             { step: "01", title: "User Research", description: "Understanding user needs and behaviors.", details: "Learn about user personas, interviews, and surveys to understand user behavior.", hours: "4 Hours" },
//             { step: "02", title: "Wireframing & Prototyping", description: "Creating basic structures and interactive prototypes.", details: "Use tools like Figma or Adobe XD to create wireframes and low-fidelity prototypes.", hours: "5 Hours" },
//             { step: "03", title: "Visual Design & Branding", description: "Applying colors, typography, and branding elements.", details: "Learn the principles of UI design, including color theory and typography selection.", hours: "6 Hours" },
//             { step: "04", title: "Usability Testing", description: "Testing with real users and improving designs.", details: "Conduct A/B testing, heuristic evaluation, and usability tests to refine designs.", hours: "3 Hours" },
//             { step: "05", title: "Final Implementation", description: "Preparing assets and handing off to development.", details: "Optimize design assets, create style guides, and ensure smooth developer handoff.", hours: "4 Hours" },
//           ].map((item, index) => (
//             <div key={index} className="col-12 col-md-6 col-lg-4 d-flex">
//               <div className="card shadow-lg p-3 w-100">
//                 <h3 className="fw-semibold">Step {item.step}</h3>
//                 <h5 className="fw-bold">{item.title}</h5>
//                 <p className="text-muted">{item.description}</p>
//                 <p className="text-dark"><strong>Details:</strong> {item.details}</p>
//                 <p className="text-primary"><strong>Duration:</strong> {item.hours}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CourseSection;


import React, { useState, useEffect } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';

const API_URL = "https://api-generator.retool.com/fJ5ysN/courses/1";

const CourseSection = () => {
  const [videoUrl, setVideoUrl] = useState("");

  useEffect(() => {
    const fetchVideo = async () => {
      try {
        const response = await axios.get(API_URL);
        const videoData = response.data.video; 
        setVideoUrl(videoData);
      } catch (error) {
        console.error("Error fetching the video:", error);
      }
    };
    fetchVideo();
  }, []);

  return (
    <div className="container text-center">
      {/* Course Video */}
      <div className="position-relative mx-auto my-4" style={{ width: "80%", height: "60vh" }}>
        {videoUrl ? (
          <video className="w-100 h-100 object-fit-cover rounded shadow" autoPlay loop muted>
            <source src={videoUrl.image} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <p className="text-muted">Loading video...</p>
        )}
        <div className="position-absolute top-50 start-50 translate-middle text-white text-center bg-dark bg-opacity-50 p-3 rounded">
          <h1 className="fw-bold">UI/UX Design Course {videoUrl.name}</h1>
        </div>
      </div>

     
      <div className="container py-5">
        <h2 className="fw-bold mb-4">UI/UX Course Steps</h2>
        <div className="row g-4 justify-content-center">
          {[
            { step: "01", title: "User Research", description: "Understanding user needs and behaviors.", details: "Learn about personas, interviews, and surveys.", hours: "4 Hours" },
            { step: "02", title: "Wireframing & Prototyping", description: "Creating basic structures and interactive prototypes.", details: "Use tools like Figma and Adobe XD.", hours: "5 Hours" },
            { step: "03", title: "Visual Design & Branding", description: "Applying colors, typography, and branding elements.", details: "Learn UI design principles.", hours: "6 Hours" },
            { step: "04", title: "Usability Testing", description: "Testing with real users and improving designs.", details: "Conduct A/B testing and usability evaluations.", hours: "3 Hours" },
            { step: "05", title: "Final Implementation", description: "Preparing assets and handing off to developers.", details: "Create style guides and optimize assets.", hours: "4 Hours" },
          ].map((item, index) => (
            <div key={index} className="col-12 col-md-6 col-lg-4 d-flex">
              <div className="card shadow-lg p-3 w-100">
                <h3 className="fw-semibold text-primary">Step {item.step}</h3>
                <h5 className="fw-bold">{item.title}</h5>
                <p className="text-muted">{item.description}</p>
                <p><strong>Details:</strong> {item.details}</p>
                <p className="text-success"><strong>Duration:</strong> {item.hours}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseSection;

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const API_URL = "https://api-generator.retool.com/fJ5ysN/courses";

function AdminDashboard() {
  const [courses, setCourses] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [newCourse, setNewCourse] = useState("");
  const [newImage, setNewImage] = useState("");
  const [newVideo, setNewVideo] = useState("");
  const [editingCourse, setEditingCourse] = useState(null);
  const [editName, setEditName] = useState("");
  const [editImage, setEditImage] = useState("");
  const [editVideo, setEditVideo] = useState("");
  const [formErrors, setFormErrors] = useState({});
  const [editErrors, setEditErrors] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [confirmDelete, setConfirmDelete] = useState(null);
  const itemsPerPage = 5;
  const navigate = useNavigate();

  // Styling adjustments
  const inputStyle = { padding: '8px', margin: '5px 0', borderRadius: '4px', border: '1px solid #ccc', width: '100%' };
  const formStyle = { display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' };
  const buttonStyle = { backgroundColor: '#ff9500', color: 'black', padding: '10px', border: 'none', borderRadius: '4px', cursor: 'pointer', width: '100%' , margin: '5px' };
  const paginationButtonStyle = { margin: '0 5px', padding: '8px 12px', backgroundColor: 'black', color: '#ff9500', border: 'none', borderRadius: '4px', cursor: 'pointer' };

  useEffect(() => {
    fetchCourses();
  }, []);

  useEffect(() => {
    const filtered = courses.filter((course) => course.name.toLowerCase().includes(searchTerm.toLowerCase()));
    setFilteredCourses(filtered);
    setCurrentPage(1);
  }, [searchTerm, courses]);

  const fetchCourses = async () => {
    const response = await axios.get(API_URL);
    setCourses(response.data);
  };

  const validateForm = () => {
    const errors = {};
    if (!newCourse.trim()) errors.name = "Course name is required";
    if (!newImage.trim()) errors.image = "Image URL is required";
    if (!newVideo.trim()) errors.video = "Video URL is required";
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const validateEditForm = () => {
    const errors = {};
    if (!editName.trim()) errors.name = "Course name is required";
    if (!editImage.trim()) errors.image = "Image URL is required";
    if (!editVideo.trim()) errors.video = "Video URL is required";
    setEditErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const addCourse = async () => {
    if (!validateForm()) return;
    await axios.post(API_URL, { name: newCourse, image: newImage, video: newVideo });
    setNewCourse("");
    setNewImage("");
    setNewVideo("");
    setFormErrors({});
    fetchCourses();
  };

  const deleteCourse = async () => {
    await axios.delete(`${API_URL}/${confirmDelete}`);
    setConfirmDelete(null); 
    fetchCourses();
  };

  const startEditing = (course) => {
    setEditingCourse(course.id);
    setEditName(course.name || "");
    setEditImage(course.image || "");
    setEditVideo(course.video || "");
    setEditErrors({});
  };

  const updateCourse = async () => {
    if (!validateEditForm()) return;
    await axios.put(`${API_URL}/${editingCourse}`, { name: editName, image: editImage, video: editVideo });
    setEditingCourse(null);
    fetchCourses();
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentCourses = filteredCourses.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "100vh", padding: "20px" }}>
      <h1>Admin Dashboard</h1>
      {/* <button onClick={() => navigate("/UserShoppingCart")} style={buttonStyle}>Go To UserShoppingCart</button> */}
      
      <input type="text" placeholder="Search courses" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} style={inputStyle} />

      <div style={formStyle}>
        <h3>Add Course</h3>
        <input type="text" placeholder="Course name" value={newCourse} onChange={(e) => setNewCourse(e.target.value)} style={inputStyle} />
        {formErrors.name && <p style={{ color: 'red' }}>{formErrors.name}</p>}
        
        <input type="text" placeholder="Image URL" value={newImage} onChange={(e) => setNewImage(e.target.value)} style={inputStyle} />
        {formErrors.image && <p style={{ color: 'red' }}>{formErrors.image}</p>}
        
        <input type="text" placeholder="Video URL" value={newVideo} onChange={(e) => setNewVideo(e.target.value)} style={inputStyle} />
        {formErrors.video && <p style={{ color: 'red' }}>{formErrors.video}</p>}
        
        <button onClick={addCourse} style={buttonStyle}>Add Course</button>
      </div>

      {currentCourses.map(course => (
        <div key={course.id} style={{ marginBottom: '20px', textAlign: 'center' }}>
          <h3>{course.name}</h3>
          <video src={course.image||course.video} alt={course.name||"https://youtu.be/Z2ZgGiAmaa4?si=yjVueKSiQd6Y7GZo"} style={{ width: '100px', height: 'auto', marginBottom: '10px', }
          
        }
        enableYoutube="true"
        controls
        controlsList="nodownload"
        className="w-100 h-100 object-fit-cover"
        autoPlay
        
        />
          {/* <p>{course.video}</p> */}
          <button className="btn btn-primary mb-2" onClick={() => startEditing(course)} style={buttonStyle}>Edit</button>

          <button onClick={() => setConfirmDelete(course.id)} style={buttonStyle}>Delete</button>

          {confirmDelete === course.id && (
            <div>
              <p style={{ marginBottom: '10px', color: 'red' }}>Are you sure you want to delete this course?</p>
              <button onClick={deleteCourse} style={buttonStyle}>Yes</button>
              <button onClick={() => setConfirmDelete(null)} style={buttonStyle}>Cancel</button>
            </div>
          )}

          {editingCourse === course.id && (
            <div>
              <input type="text" value={editName} onChange={(e) => setEditName(e.target.value)} style={inputStyle} />
              {editErrors.name && <p style={{ color: 'red' }}>{editErrors.name}</p>}
              
              <input type="text" value={editImage} onChange={(e) => setEditImage(e.target.value)} style={inputStyle} />
              {editErrors.image && <p style={{ color: 'red' }}>{editErrors.image}</p>}
              
              <input type="text" value={editVideo} onChange={(e) => setEditVideo(e.target.value)} style={inputStyle} />
              {editErrors.video && <p style={{ color: 'red' }}>{editErrors.video}</p>}
              
              <button onClick={updateCourse} style={buttonStyle}>Update Course</button>
            </div>
          )}
        </div>
      ))}

      <div>
        <button onClick={() => paginate(currentPage - 1)} style={paginationButtonStyle} disabled={currentPage === 1}>Previous</button>
        <button onClick={() => paginate(currentPage + 1)} style={paginationButtonStyle} disabled={currentPage === Math.ceil(filteredCourses.length / itemsPerPage)}>Next</button>
      </div>
    </div>
  );
}

export default AdminDashboard;


// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Navigate } from "react-router-dom";

// const API_URL = "https://api-generator.retool.com/fJ5ysN/courses";

// export default function AdminDashboard() {
//   const [courses, setCourses] = useState([]);
//   const [newCourse, setNewCourse] = useState("");
//   const [newImage, setNewImage] = useState("");
//   const [newVideo, setNewVideo] = useState("");
//   const [editingCourse, setEditingCourse] = useState(null);
//   const [editName, setEditName] = useState("");
//   const [editImage, setEditImage] = useState("");
//   const [editVideo, setEditVideo] = useState("");

//   useEffect(() => {
//     fetchCourses();
//   }, []);

//   const fetchCourses = async () => {
//     const response = await axios.get(API_URL);
//     setCourses(response.data);
//   };

//   const addCourse = async () => {
//     if (!newCourse.trim()) return;
//     await axios.post(API_URL, { name: newCourse, image: newImage, video: newVideo });
//     setNewCourse("");
//     setNewImage("");
//     setNewVideo("");
//     fetchCourses();
//   };

//   const deleteCourse = async (id) => {
//     await axios.delete(`${API_URL}/${id}`);
//     fetchCourses();
//   };

//   const startEditing = (course) => {
//     setEditingCourse(course.id);
//     setEditName(course.name || "");
//     setEditImage(course.image || "");
//     setEditVideo(course.video || "");
//   };

//   const updateCourse = async () => {
//     if (!editName.trim()) return;
//     await axios.put(`${API_URL}/${editingCourse}`, { name: editName, image: editImage, video: editVideo });
//     setEditingCourse(null);
//     fetchCourses();
//   };

//   return (
//     <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "100vh", padding: "20px" }}>
//       <h1 style={{ fontSize: "24px", fontWeight: "bold", textAlign: "center" }}>Admin Dashboard</h1>
//       <h4 style={{ fontSize: "16px", textAlign: "center", marginBottom: "20px" }} >
//         Welcome to the Admin Dashboard! Here, you can manage your course catalog, add new courses, and update existing ones.
      
//       </h4>
//       <h5 style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "10px", color: "black" }} onClick={() => Navigate("/UserShoppingCart")}>  Go To UserShoppingCart</h5>

//       <div style={{ background: "#f9f9f9", padding: "20px", borderRadius: "10px", boxShadow: "0 4px 8px rgba(0,0,0,0.1)", width: "100%", maxWidth: "500px" }}>
//         <input type="text" placeholder="Enter course name" value={newCourse} onChange={(e) => setNewCourse(e.target.value)} style={inputStyle} />
//         <input type="text" placeholder="Enter image URL" value={newImage} onChange={(e) => setNewImage(e.target.value)} style={inputStyle} />
//         <input type="text" placeholder="Enter video URL" value={newVideo} onChange={(e) => setNewVideo(e.target.value)} style={inputStyle} />
//         <button onClick={addCourse} style={buttonStyle}>Add Course</button>
//       </div>

//       <table style={tableStyle}>
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Course Name</th>
//             <th>Media</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {courses.map((course) => (
//             <tr key={course.id}>
//               <td>{course.id}</td>
//               <td>{course.name || "Unnamed Course"}</td>
//               <td>
//                 {course.video ? (
//                   <video src={course.video} controls style={mediaStyle} autoPlay loop muted className="w-100 h-100 object-fit-cover" enableYoutube="true" />
//                 ) : course.image ? (
// <video src={course.image} controls style={mediaStyle} autoPlay loop muted className="w-100 h-100 object-fit-cover" enableYoutube="true" />
//                 ) : (
//                   "No media available"
//                 )}
//               </td>
//               <td>
//                 {editingCourse === course.id ? (
//                   <>
//                     <input type="text" value={editName} onChange={(e) => setEditName(e.target.value)} style={inputStyle} />
//                     <input type="text" value={editImage} placeholder="Edit image URL" onChange={(e) => setEditImage(e.target.value)} style={inputStyle} />
//                     <input type="text" value={editVideo} placeholder="Edit video URL" onChange={(e) => setEditVideo(e.target.value)} style={inputStyle} />
//                     <button onClick={updateCourse} style={buttonStyle}>Save</button>
//                   </>
//                 ) : (
//                   <>
//                     <button onClick={() => startEditing(course)} style={buttonStyle}>Edit</button>
//                     <button onClick={() => deleteCourse(course.id)} style={deleteButtonStyle}>Delete</button>
//                   </>
//                 )}
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// const inputStyle = {
//   width: "100%",
//   padding: "10px",
//   margin: "5px 0",
//   border: "1px solid #ccc",
//   borderRadius: "5px",
// };

// const buttonStyle = {
//   background: "#4CAF50",
//   color: "white",
//   padding: "10px",
//   border: "none",
//   borderRadius: "5px",
//   cursor: "pointer",
//   width: "100%",
//   marginTop: "10px",
// };

// const deleteButtonStyle = {
//   background: "#f44336",
//   color: "white",
//   padding: "10px",
//   border: "none",
//   borderRadius: "5px",
//   cursor: "pointer",
//   width: "100%",
//   marginTop: "10px",
// };

// const tableStyle = {
//   width: "100%",
//   maxWidth: "800px",
//   borderCollapse: "collapse",
//   marginTop: "20px",
//   textAlign: "center",
// };

// const mediaStyle = {
//   width: "100px",
//   height: "100px",
//   objectFit: "cover",
//   borderRadius: "5px",
// };

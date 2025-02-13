
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";

const API_URL = "https://api-generator.retool.com/fJ5ysN/courses";

export default function AdminDashboard() {
  const [courses, setCourses] = useState([]);
  const [newCourse, setNewCourse] = useState("");
  const [newImage, setNewImage] = useState("");
  const [newVideo, setNewVideo] = useState("");
  const [editingCourse, setEditingCourse] = useState(null);
  const [editName, setEditName] = useState("");
  const [editImage, setEditImage] = useState("");
  const [editVideo, setEditVideo] = useState("");

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    const response = await axios.get(API_URL);
    setCourses(response.data);
  };

  const addCourse = async () => {
    if (!newCourse.trim()) return;
    await axios.post(API_URL, { name: newCourse, image: newImage, video: newVideo });
    setNewCourse("");
    setNewImage("");
    setNewVideo("");
    fetchCourses();
  };

  const deleteCourse = async (id) => {
    await axios.delete(`${API_URL}/${id}`);
    fetchCourses();
  };

  const startEditing = (course) => {
    setEditingCourse(course.id);
    setEditName(course.name || "");
    setEditImage(course.image || "");
    setEditVideo(course.video || "");
  };

  const updateCourse = async () => {
    if (!editName.trim()) return;
    await axios.put(`${API_URL}/${editingCourse}`, { name: editName, image: editImage, video: editVideo });
    setEditingCourse(null);
    fetchCourses();
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "100vh", padding: "20px" }}>
      <h1 style={{ fontSize: "24px", fontWeight: "bold", textAlign: "center" }}>Admin Dashboard</h1>
      <h4 style={{ fontSize: "16px", textAlign: "center", marginBottom: "20px" }} >
        Welcome to the Admin Dashboard! Here, you can add new courses, and update existing ones.
      
      </h4>
      <h5 style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "10px", color: "black" }} onClick={() => Navigate("/UserShoppingCart")}>  Go To UserShoppingCart</h5>

      <div style={{ background: "#f9f9f9", padding: "20px", borderRadius: "10px", boxShadow: "0 4px 8px rgba(0,0,0,0.1)", width: "100%", maxWidth: "500px" }}>
        <input type="text" placeholder="Enter course name" value={newCourse} onChange={(e) => setNewCourse(e.target.value)} style={inputStyle} />
        <input type="text" placeholder="Enter image URL" value={newImage} onChange={(e) => setNewImage(e.target.value)} style={inputStyle} />
        <input type="text" placeholder="Enter video URL" value={newVideo} onChange={(e) => setNewVideo(e.target.value)} style={inputStyle} />
        <button onClick={addCourse} style={buttonStyle}>Add Course</button>
      </div>

      <table style={tableStyle}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Course Name</th>
            <th>Media</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course) => (
            <tr key={course.id}>
              <td>{course.id}</td>
              <td>{course.name || "Unnamed Course"}</td>
              <td>
                {course.video ? (
                  <video src={course.video} controls style={mediaStyle} autoPlay loop muted className="w-100 h-100 object-fit-cover" enableYoutube="true" />
                ) : course.image ? (
<video src={course.image} controls style={mediaStyle} autoPlay loop muted className="w-100 h-100 object-fit-cover" enableYoutube="true" />
                ) : (
                  "No media available"
                )}
              </td>
              <td>
                {editingCourse === course.id ? (
                  <>
                    <input type="text" value={editName} onChange={(e) => setEditName(e.target.value)} style={inputStyle} />
                    <input type="text" value={editImage} placeholder="Edit image URL" onChange={(e) => setEditImage(e.target.value)} style={inputStyle} />
                    <input type="text" value={editVideo} placeholder="Edit video URL" onChange={(e) => setEditVideo(e.target.value)} style={inputStyle} />
                    <button onClick={updateCourse} style={buttonStyle}>Save</button>
                  </>
                ) : (
                  <>
                    <button onClick={() => startEditing(course)} style={buttonStyle}>Edit</button>
                    <button onClick={() => deleteCourse(course.id)} style={deleteButtonStyle}>Delete</button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "10px",
  margin: "5px 0",
  border: "1px solid #ccc",
  borderRadius: "5px",
};

const buttonStyle = {
  background: "#4CAF50",
  color: "white",
  padding: "10px",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  width: "100%",
  marginTop: "10px",
};

const deleteButtonStyle = {
  background: "#f44336",
  color: "white",
  padding: "10px",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  width: "100%",
  marginTop: "10px",
};

const tableStyle = {
  width: "100%",
  maxWidth: "800px",
  borderCollapse: "collapse",
  marginTop: "20px",
  textAlign: "center",
};

const mediaStyle = {
  width: "100px",
  height: "100px",
  objectFit: "cover",
  borderRadius: "5px",
};

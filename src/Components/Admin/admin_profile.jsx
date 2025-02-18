import React from "react";
import { BrowserRouter as Router, useNavigate } from "react-router-dom";
import { Card, CardContent, Typography, Grid } from "@mui/material";
import { PieChart } from "react-minimal-pie-chart";

function AdminProfile() {
  const navigate = useNavigate();

  const stats = {
    totalCourses: 50,
    totalStudents: 1200,
    completedCourses: 800,
    pendingCourses: 20,
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif", backgroundColor: "#f9f9f9", minHeight: "100vh" }}>
      <h1 style={{ textAlign: "center", marginBottom: "20px", color: "#333" }}>Admin Profile</h1>

      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12} md={6} lg={3}>
          <Card style={{ backgroundColor: "#eeeeee" }}>
            <CardContent>
              <Typography variant="h6" color="textSecondary">Total Courses</Typography>
              <Typography variant="h4" color="primary">{stats.totalCourses}</Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6} lg={3}>
          <Card style={{ backgroundColor: "#eeeeee" }}>
            <CardContent>
              <Typography variant="h6" color="textSecondary">Total Students</Typography>
              <Typography variant="h4" color="primary">{stats.totalStudents}</Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6} lg={3}>
          <Card style={{ backgroundColor: "#eeeeee" }}>
            <CardContent>
              <Typography variant="h6" color="textSecondary">Completed Courses</Typography>
              <Typography variant="h4" color="primary">{stats.completedCourses}</Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6} lg={3}>
          <Card style={{ backgroundColor: "#eeeeee" }}>
            <CardContent>
              <Typography variant="h6" color="textSecondary">Pending Courses</Typography>
              <Typography variant="h4" color="primary">{stats.pendingCourses}</Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6} lg={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>Course Completion Overview</Typography>
              <PieChart
                data={[
                  { title: 'Completed', value: stats.completedCourses, color: '#4CAF50' },
                  { title: 'Pending', value: stats.pendingCourses, color: '#FFC107' },
                ]}
              />
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <div style={{ marginTop: "30px", textAlign: "center" }}>
        <button
          onClick={() => navigate("/AdminShopping")}
          style={{ padding: "10px 20px", backgroundColor: "#1976D2", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}
        >
          Go to Shopping Cart
        </button>
      </div>
    </div>
  );
}

export default AdminProfile; 

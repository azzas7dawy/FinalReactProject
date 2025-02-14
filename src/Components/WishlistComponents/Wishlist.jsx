// src/Wishlist.js
import React, { useState } from 'react';
import './Wishlist.css';
import mockCourses from './mockCourses'; // Import the mock courses

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    const results = mockCourses.filter((course) =>
      course.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResults(results);
  };

  const addCourseToWishlist = (course) => {
    if (!wishlist.some((item) => item.id === course.id)) {
      setWishlist([...wishlist, course]);
    }
  };

  const removeCourseFromWishlist = (id) => {
    const newWishlist = wishlist.filter((item) => item.id !== id);
    setWishlist(newWishlist);
  };

  return (
    <div className="wishlist-container">
      <h1>My Wishlist</h1>

      <div className="search-course">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search for courses..."
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      {searchResults.length > 0 && (
        <div className="search-results">
          <h2>Search Results</h2>
          <ul>
            {searchResults.map((course) => (
              <li key={course.id}>
                <strong>{course.title}</strong> - {course.description}
                <button onClick={() => addCourseToWishlist(course)}>Add to Wishlist</button>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="wishlist">
        <h2>My Courses</h2>
        {wishlist.length > 0 ? (
          <ul>
            {wishlist.map((course) => (
              <li key={course.id}>
                <strong>{course.title}</strong> - {course.description}
                <button onClick={() => removeCourseFromWishlist(course.id)}>Remove</button>
              </li>
            ))}
          </ul>
        ) : (
          <p className="not-found-message">No courses in your wishlist.</p>
        )}
      </div>
    </div>
  );
};

export default Wishlist;  
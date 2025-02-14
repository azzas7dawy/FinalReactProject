// src/components/CourseCategories.js
import React, { useState, useEffect } from 'react';

const CourseCategories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Simulate fetching data from an API
    const fetchData = () => {
      const data = [
        { id: 1, name: 'Web Development', image: 'https://via.placeholder.com/150' },
        { id: 2, name: 'Data Science', image: 'https://via.placeholder.com/150' },
        { id: 3, name: 'Digital Marketing', image: 'https://via.placeholder.com/150' },
      ];
      setCategories(data);
    };

    fetchData();
  }, []);

  return (
    <section className="py-5">
      <div className="container">
        <h2 className="text-center mb-5">Course Categories</h2>
        <div className="row">
          {categories.map((category) => (
            <div key={category.id} className="col-md-4 mb-4">
              <div className="card h-100">
                <img src={category.image} className="card-img-top" alt={category.name} />
                <div className="card-body">
                  <h3 className="card-title">{category.name}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseCategories;
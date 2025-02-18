
import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FaPlay, FaHeart, FaRegHeart, FaCartPlus, FaShoppingCart, FaBookmark } from "react-icons/fa";
import { CartContext } from "../../Context/CartContext.js";
import { useSelector} from "react-redux";
import Swal from 'sweetalert2';

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [wishlist, setWishlist] = useState([]);

  const navigate = useNavigate();
  const user =useSelector((state)=>state.auth.user);
  const coursesPerPage = 9;

  const { cart, addToCart, removeFromCart } = useContext(CartContext);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get(
          `https://api-generator.retool.com/fJ5ysN/courses?_page=${currentPage}&_limit=${coursesPerPage}${
            searchTerm ? `&name_like=${searchTerm}` : ""
          }`
        );
        setCourses(response.data);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    fetchCourses();
  }, [currentPage, searchTerm]);

  const handleCardClick = (courseId) => {
    navigate("/opencourse", { state: { videoId: courseId } });
  };

  const toggleWishlist = (course) => {
    if(!user){
      Swal.fire({
        icon: 'warning',
        title: 'Oops...',
        text: 'You must log in to add to favorites.',
      }).then(() => {
        navigate("/login");
      })
      
      return;
    }
    if (wishlist.some((item) => item.id === course.id)) {
      setWishlist(wishlist.filter((item) => item.id !== course.id));
    } else {
      setWishlist([...wishlist, course]);
    }
  };

  const toggleCart = (course) => {
    if(!user){
      Swal.fire({
        icon: 'warning',
        title: 'Oops...',
        text: 'You must log in to add to wishlist.',
      }).then(()=>{
        navigate("/login");

      })
      return;
    }
    if (cart.some((item) => item.id === course.id)) {
      removeFromCart(course.id);
    } else {
      addToCart(course);
    }
  };

  const filteredCourses = courses.filter((course) => course.name.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-end align-items-center mb-3">
        <div
          className="position-relative"
          style={{ cursor: "pointer" }}
          onClick={() => navigate("/ShoppingCart")}
        >
          <FaShoppingCart size={30} color="green" />
          {cart.length > 0 && (
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {cart.length}
              <span className="visually-hidden">items in cart</span>
            </span>
          )}
        </div>

        {/* Wishlist icon to navigate to wishlist page */}
        <div
          className="position-relative ms-3"
          style={{ cursor: "pointer" }}
          onClick={() => navigate("/wishlist")}
        >
          <FaBookmark size={30} color="blue" />
          {wishlist.length > 0 && (
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {wishlist.length}
              <span className="visually-hidden">items in wishlist</span>
            </span>
          )}
        </div>
      </div>

      <h2>Available Courses</h2>

      <input
        type="text"
        placeholder="Search courses..."
        className="form-control mb-3"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <h4 className="mt-4">Favorite Courses (Wishlist)</h4>
      {wishlist.length === 0 ? (
        <p>No favorite courses yet.</p>
      ) : (
        <div className="row">
          {wishlist.map((course) => (
            <div key={course.id} className="col-md-4 col-lg-3 mb-4">
              <div className="card shadow-sm">
                <iframe
                  width="100%"
                  height="150"
                  src={course.video || "https://www.youtube.com/embed/Z2ZgGiAmaa4"}
                  title={course.name}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <div className="card-body">
                  <h5 className="card-title">{course.name}</h5>
                  <button
                    className="btn btn-outline-danger btn-sm"
                    onClick={() => toggleWishlist(course)}
                  >
                    Remove from Wishlist
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="row">
        {filteredCourses.map((course) => (
          <div key={course.id} className="col-md-4 col-lg-3 mb-4">
            <div className="card shadow-sm">
              <iframe
                width="100%"
                height="200"
                src={course.video || "https://www.youtube.com/embed/Z2ZgGiAmaa4"}
                title={course.name}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <div className="card-body">
                <h5 className="card-title">{course.name}</h5>
                <div className="d-flex justify-content-between align-items-center">
                  <FaPlay
                    className="text-primary fs-4 cursor-pointer"
                    onClick={() => handleCardClick(course.id)}
                  />
                  {wishlist.some((item) => item.id === course.id) ? (
                    <FaHeart
                      className="text-danger fs-4 cursor-pointer"
                      onClick={() => toggleWishlist(course)}
                    />
                  ) : (
                    <FaRegHeart
                      className="text-danger fs-4 cursor-pointer"
                      onClick={() => toggleWishlist(course)}
                    />
                  )}
                  <FaCartPlus
                    className="text-success fs-4 cursor-pointer"
                    onClick={() => toggleCart(course)}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="d-flex justify-content-center mt-4">
        <button
          className="btn btn-outline-primary me-2"
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <button
          className="btn btn-outline-primary"
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Courses;

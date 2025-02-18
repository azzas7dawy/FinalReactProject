
import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  FaPlay,
  FaHeart,
  FaRegHeart,
  FaCartPlus,
  FaShoppingCart,
} from "react-icons/fa";
import {ShoppingCart} from "../Home/ShoppingCart.jsx";
import { CartContext } from "../../Context/CartContext.js";
import {useDispatch, useSelector} from "react-redux";
import { addToCart,addToFavorites } from "../Store/Store.jsx";



const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [wishlist, setWishlist] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const navigate = useNavigate();
  const dispatch = useDispatch();
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
      alert("يجب تسجيل الدخول لإضافة المنتج إلى قائمة الرغبات.");
      navigate("/login");
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
      alert("يجب تسجيل الدخول لإضافة المنتج إلى قائمة الرغبات.");
      navigate("/login");
      return;
    }
    if (cart.some((item) => item.id === course.id)) {
      removeFromCart(course.id);
    } else {
      addToCart(course);
    }
  };

  const filteredCourses =
    selectedCategory === "all"
      ? courses
      : courses.filter((course) => course.category === selectedCategory);

  return (
    <div className="container mt-4">
      {/* هيدر يحتوي على أيقونة السلة مع عداد */}
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
      </div>

      <h2>Available Courses</h2>

      <input
        type="text"
        placeholder="Search courses..."
        className="form-control mb-3"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <select
        className="form-select mb-3"
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        <option value="all">All Categories</option>
        <option value="programming">Programming</option>
        <option value="design">Design</option>
        <option value="business">Business</option>
      </select>

      <div className="row">
        {filteredCourses.map((course) => (
          <div key={course.id} className="col-md-4 col-lg-3 mb-4">
            <div className="card shadow-sm">
             
              {course.image ? (
                <iframe
                  width="100%"
                  height="200"
                  src={course.video || "https://www.youtube.com/embed/Z2ZgGiAmaa4"}
                  title={course.name}
                  
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  enableYoutubePlayer
                  controls
                  allowFullScreen
                ></iframe>
              ) : (
                <video
                  src={course.video || "https://www.youtube.com/embed/Z2ZgGiAmaa4?si=yjVueKSiQd6Y7GZo"}
                  className="card-img-top"
                  alt={course.name}
                  height="200px"
                  aria-controls="video-modal"
                  enableYoutubePlayer
                />
              )}
              <div className="card-body">
                <h5 className="card-title">{course.name}</h5>
                <p className="card-subtitle mb-2 text-muted">{course.id}</p>
                <p className="card-text">{course.description}</p>
                <p className="text-muted">⭐⭐⭐⭐ {course.rating}</p>
                <div className="d-flex justify-content-between align-items-center">
                  <FaPlay
                    className="text-primary fs-4 cursor-pointer"
                    onClick={() => handleCardClick(course.id)}
                    title="Open Course"
                  />
                  {wishlist.some((item) => item.id === course.id) ? (
                    <FaHeart
                      className="text-danger fs-4 cursor-pointer"
                      onClick={() => toggleWishlist(course)}
                      title="Remove from Wishlist"
                    />
                  ) : (
                    <FaRegHeart
                      className="text-danger fs-4 cursor-pointer"
                      onClick={() => toggleWishlist(course)}
                      title="Add to Wishlist"
                    />
                  )}
                  {cart.some((item) => item.id === course.id) ? (
                    <FaShoppingCart
                      className="text-success fs-4 cursor-pointer"
                      onClick={() => toggleCart(course)}
                      title="Remove from Cart"
                    />
                  ) : (
                    <FaCartPlus
                      className="text-success fs-4 cursor-pointer"
                      onClick={() => toggleCart(course)}
                      title="Add to Cart"
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="d-flex justify-content-between mt-4">
        <button
          className="btn btn-secondary"
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          Previous
        </button>
        <button
          className="btn btn-secondary"
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Courses;


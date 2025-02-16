import React, { useContext } from "react";
import { CartContext } from "../../Context/CartContext.js";
import { FaHeart } from "react-icons/fa";

const Wishlist = () => {
  const { wishlist, toggleWishlist } = useContext(CartContext);

  // تحقق من أن الـ wishlist ليس undefined أو null
  if (!wishlist) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container mt-4">
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
    </div>
  );
};

export default Wishlist;

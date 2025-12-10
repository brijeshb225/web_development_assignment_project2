import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getEquipmentById, postReview } from "../api/api.js";
import ReviewForm from "../components/ReviewForm.jsx";

function EquipmentDetails({ addToCart }) {
  const { id } = useParams();
  const [equipment, setEquipment] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);
  const [addedToCart, setAddedToCart] = useState(false);

  const fetchEquipmentDetails = async () => {
    try {
      const data = await getEquipmentById(id);
      if (data.error) {
        setError(data.error);
      } else {
        setEquipment(data.equipment);
        setReviews(data.reviews || []);
      }
    } catch (err) {
      setError("Failed to load equipment details. Please try again.");
      console.error(err);
    }
  };

  const handleReviewPosted = (review) => {
    setReviews(prev => [...prev, review]);
  };

  useEffect(() => {
    fetchEquipmentDetails();
  }, [id]);

  if (error) return <p style={{ textAlign: "center", padding: "40px", color: "red" }}>Error: {error}</p>;
  if (!equipment) return <p style={{ textAlign: "center", padding: "40px" }}>Loading...</p>;

  const imageUrl = equipment.image 
    ? equipment.image 
    : "https://via.placeholder.com/400x300?text=No+Image";

  return (
    <div style={{ backgroundColor: "#f5f5f5", minHeight: "100vh", paddingBottom: "40px" }}>
      <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "20px" }}>
        {/* Product Header */}
        <div style={{ backgroundColor: "white", borderRadius: "8px", overflow: "hidden", boxShadow: "0 4px 6px rgba(0,0,0,0.1)", marginBottom: "30px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "30px", padding: "30px" }}>
            {/* Image */}
            <div>
              <img 
                src={imageUrl} 
                alt={equipment.name}
                style={{
                  width: "100%",
                  borderRadius: "8px",
                  objectFit: "cover",
                  maxHeight: "400px"
                }}
                onError={(e) => {
                  e.target.src = "https://via.placeholder.com/400x300?text=No+Image";
                }}
              />
            </div>

            {/* Details */}
            <div>
              <h2 style={{ margin: "0 0 15px 0", color: "#333" }}>{equipment.name}</h2>
              <div style={{ marginBottom: "20px" }}>
                <p style={{ fontSize: "0.95rem", color: "#666", lineHeight: "1.6", margin: 0 }}>
                  {equipment.description}
                </p>
              </div>
              <div style={{ backgroundColor: "#f0f0f0", padding: "15px", borderRadius: "5px", marginBottom: "20px" }}>
                <p style={{ margin: "0 0 8px 0", color: "#666", fontSize: "0.9rem" }}>Price</p>
                <p style={{ margin: 0, fontSize: "2rem", fontWeight: "bold", color: "#667eea" }}>${equipment.price}</p>
              </div>
              <button style={{
                width: "100%",
                padding: "12px",
                backgroundColor: addedToCart ? "#4caf50" : "#667eea",
                color: "white",
                border: "none",
                borderRadius: "5px",
                fontSize: "1.1rem",
                fontWeight: "bold",
                cursor: "pointer",
                transition: "background 0.3s"
              }}
              onClick={() => {
                addToCart(equipment);
                setAddedToCart(true);
                setTimeout(() => setAddedToCart(false), 2000);
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = addedToCart ? "#45a049" : "#764ba2"}
              onMouseLeave={(e) => e.target.style.backgroundColor = addedToCart ? "#4caf50" : "#667eea"}>
                {addedToCart ? "✓ Added to Cart!" : "Add to Cart"}
              </button>
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <div style={{ backgroundColor: "white", borderRadius: "8px", padding: "30px", boxShadow: "0 4px 6px rgba(0,0,0,0.1)" }}>
          <h3 style={{ margin: "0 0 20px 0", color: "#333" }}>Customer Reviews ({reviews.length})</h3>
          
          {reviews.length > 0 ? (
            <div style={{ marginBottom: "30px" }}>
              {reviews.map((rev, index) => (
                <div key={index} style={{
                  borderBottom: index !== reviews.length - 1 ? "1px solid #eee" : "none",
                  padding: "15px 0"
                }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
                    <strong style={{ color: "#333" }}>{rev.userName}</strong>
                    <span style={{ color: "#f39c12", fontSize: "1.1rem" }}>{'⭐'.repeat(rev.rating)}</span>
                  </div>
                  <p style={{ color: "#666", margin: "8px 0", lineHeight: "1.5" }}>{rev.text}</p>
                </div>
              ))}
            </div>
          ) : (
            <p style={{ color: "#999", marginBottom: "30px" }}>No reviews yet. Be the first to review!</p>
          )}

          <ReviewForm equipmentId={id} onPosted={handleReviewPosted} />
        </div>
      </div>
    </div>
  );
}

export default EquipmentDetails;

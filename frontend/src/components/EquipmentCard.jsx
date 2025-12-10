import React from "react";
import { Link } from "react-router-dom";

function EquipmentCard({ equipment }) {
  const imageUrl = equipment.image 
    ? equipment.image 
    : "https://via.placeholder.com/280x200?text=No+Image";

  return (
    <div style={{
      background: "white",
      borderRadius: "8px",
      overflow: "hidden",
      boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
      transition: "transform 0.3s, box-shadow 0.3s",
      cursor: "pointer",
      display: "flex",
      flexDirection: "column"
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = "translateY(-5px)";
      e.currentTarget.style.boxShadow = "0 8px 15px rgba(0,0,0,0.2)";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = "translateY(0)";
      e.currentTarget.style.boxShadow = "0 4px 6px rgba(0,0,0,0.1)";
    }}>
      {/* Image */}
      <div style={{
        width: "100%",
        height: "200px",
        overflow: "hidden",
        backgroundColor: "#f0f0f0"
      }}>
        <img 
          src={imageUrl} 
          alt={equipment.name}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover"
          }}
          onError={(e) => {
            e.target.src = "https://via.placeholder.com/280x200?text=No+Image";
          }}
        />
      </div>

      {/* Content */}
      <div style={{ padding: "15px", flex: 1, display: "flex", flexDirection: "column" }}>
        <h3 style={{ margin: "0 0 8px 0", color: "#333", fontSize: "1.1rem" }}>
          {equipment.name}
        </h3>
        
        <p style={{
          margin: "0 0 10px 0",
          color: "#666",
          fontSize: "0.9rem",
          lineHeight: "1.4",
          flex: 1
        }}>
          {equipment.description?.slice(0, 80)}...
        </p>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
          <p style={{
            margin: 0,
            fontSize: "1.3rem",
            fontWeight: "bold",
            color: "#667eea"
          }}>
            ${equipment.price}
          </p>
        </div>

        <Link to={`/equipment/${equipment._id}`} style={{
          display: "block",
          padding: "10px",
          backgroundColor: "#667eea",
          color: "white",
          textDecoration: "none",
          borderRadius: "5px",
          textAlign: "center",
          fontWeight: "bold",
          transition: "background 0.3s"
        }}
        onMouseEnter={(e) => e.target.style.backgroundColor = "#764ba2"}
        onMouseLeave={(e) => e.target.style.backgroundColor = "#667eea"}>
          View Details
        </Link>
      </div>
    </div>
  );
}

export default EquipmentCard;

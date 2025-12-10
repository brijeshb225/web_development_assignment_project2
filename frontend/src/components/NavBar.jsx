import React from "react";
import { Link, useNavigate } from "react-router-dom";

function NavBar({ user, onLogout, cartCount }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    navigate("/login");
  };

  return (
    <nav style={{ padding: "10px 20px", backgroundColor: "#0077cc", color: "white", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <div>
        <Link to="/" style={{ marginRight: "20px", color: "white", textDecoration: "none", fontWeight: "bold", fontSize: "1.1rem" }}>
          🏋️ GymStore
        </Link>
        <Link to="/" style={{ marginRight: "15px", color: "white", textDecoration: "none" }}>Home</Link>
        <Link to="/equipment" style={{ marginRight: "15px", color: "white", textDecoration: "none" }}>Equipment</Link>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
        {user ? (
          <>
            <Link to="/cart" style={{
              color: "white",
              textDecoration: "none",
              position: "relative",
              fontSize: "1.3rem"
            }}>
              🛒
              {cartCount > 0 && (
                <span style={{
                  position: "absolute",
                  top: "-8px",
                  right: "-10px",
                  backgroundColor: "#ff6b6b",
                  color: "white",
                  borderRadius: "50%",
                  width: "20px",
                  height: "20px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "0.8rem",
                  fontWeight: "bold"
                }}>
                  {cartCount}
                </span>
              )}
            </Link>
            <span style={{ marginRight: "10px" }}>Welcome, {user.name}!</span>
            <button 
              onClick={handleLogout} 
              style={{ padding: "6px 12px", backgroundColor: "#ff6b6b", color: "white", border: "none", borderRadius: "4px", cursor: "pointer", transition: "background 0.3s" }}
              onMouseEnter={(e) => e.target.style.backgroundColor = "#ff5252"}
              onMouseLeave={(e) => e.target.style.backgroundColor = "#ff6b6b"}
            >
              Logout
            </button>
          </>
        ) : null}
      </div>
    </nav>
  );
}

export default NavBar;

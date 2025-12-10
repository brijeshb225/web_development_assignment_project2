import React from "react";
import { Link } from "react-router-dom";

function Cart({ cart, removeFromCart, updateQuantity }) {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div style={{ backgroundColor: "#f5f5f5", minHeight: "100vh", paddingBottom: "40px" }}>
      <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "20px" }}>
        <h1 style={{ color: "#333", marginBottom: "30px" }}>Shopping Cart</h1>

        {cart.length === 0 ? (
          <div style={{
            backgroundColor: "white",
            borderRadius: "8px",
            padding: "40px",
            textAlign: "center",
            boxShadow: "0 4px 6px rgba(0,0,0,0.1)"
          }}>
            <p style={{ color: "#666", fontSize: "1.1rem", marginBottom: "20px" }}>Your cart is empty</p>
            <Link to="/equipment" style={{
              display: "inline-block",
              backgroundColor: "#667eea",
              color: "white",
              padding: "12px 30px",
              borderRadius: "5px",
              textDecoration: "none",
              fontWeight: "bold",
              transition: "background 0.3s"
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = "#764ba2"}
            onMouseLeave={(e) => e.target.style.backgroundColor = "#667eea"}>
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div style={{ display: "grid", gridTemplateColumns: "1fr 300px", gap: "30px" }}>
            {/* Cart Items */}
            <div style={{ backgroundColor: "white", borderRadius: "8px", padding: "20px", boxShadow: "0 4px 6px rgba(0,0,0,0.1)" }}>
              {cart.map((item) => (
                <div key={item._id} style={{
                  display: "flex",
                  gap: "15px",
                  paddingBottom: "20px",
                  borderBottom: "1px solid #eee",
                  marginBottom: "20px"
                }}>
                  {/* Product Image */}
                  <div style={{ width: "80px", height: "80px", flexShrink: 0 }}>
                    <img
                      src={item.image || "https://via.placeholder.com/80x80?text=No+Image"}
                      alt={item.name}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        borderRadius: "5px"
                      }}
                      onError={(e) => {
                        e.target.src = "https://via.placeholder.com/80x80?text=No+Image";
                      }}
                    />
                  </div>

                  {/* Product Details */}
                  <div style={{ flex: 1 }}>
                    <Link to={`/equipment/${item._id}`} style={{
                      color: "#667eea",
                      textDecoration: "none",
                      fontSize: "1.1rem",
                      fontWeight: "bold",
                      marginBottom: "5px",
                      display: "block"
                    }}>
                      {item.name}
                    </Link>
                    <p style={{ color: "#666", margin: "5px 0", fontSize: "0.9rem" }}>
                      Price: ${item.price}
                    </p>

                    {/* Quantity Controls */}
                    <div style={{ display: "flex", alignItems: "center", gap: "10px", marginTop: "10px" }}>
                      <button
                        onClick={() => updateQuantity(item._id, item.quantity - 1)}
                        style={{
                          padding: "5px 10px",
                          backgroundColor: "#ddd",
                          border: "none",
                          borderRadius: "3px",
                          cursor: "pointer",
                          fontWeight: "bold"
                        }}
                      >
                        −
                      </button>
                      <span style={{ fontSize: "1rem", fontWeight: "bold", minWidth: "30px", textAlign: "center" }}>
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item._id, item.quantity + 1)}
                        style={{
                          padding: "5px 10px",
                          backgroundColor: "#ddd",
                          border: "none",
                          borderRadius: "3px",
                          cursor: "pointer",
                          fontWeight: "bold"
                        }}
                      >
                        +
                      </button>
                      <span style={{ marginLeft: "auto", fontWeight: "bold", color: "#667eea" }}>
                        Subtotal: ${(item.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  </div>

                  {/* Remove Button */}
                  <button
                    onClick={() => removeFromCart(item._id)}
                    style={{
                      padding: "10px 15px",
                      backgroundColor: "#ff6b6b",
                      color: "white",
                      border: "none",
                      borderRadius: "5px",
                      cursor: "pointer",
                      fontWeight: "bold",
                      height: "fit-content",
                      transition: "background 0.3s"
                    }}
                    onMouseEnter={(e) => e.target.style.backgroundColor = "#ff5252"}
                    onMouseLeave={(e) => e.target.style.backgroundColor = "#ff6b6b"}
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div style={{
              backgroundColor: "white",
              borderRadius: "8px",
              padding: "20px",
              boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
              height: "fit-content",
              position: "sticky",
              top: "20px"
            }}>
              <h3 style={{ margin: "0 0 20px 0", color: "#333" }}>Order Summary</h3>
              
              <div style={{ marginBottom: "15px", paddingBottom: "15px", borderBottom: "1px solid #eee" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px", color: "#666" }}>
                  <span>Subtotal:</span>
                  <span>${total.toFixed(2)}</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px", color: "#666" }}>
                  <span>Shipping:</span>
                  <span>Free</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px", color: "#666" }}>
                  <span>Tax:</span>
                  <span>${(total * 0.1).toFixed(2)}</span>
                </div>
              </div>

              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "20px" }}>
                <span style={{ fontWeight: "bold", fontSize: "1.1rem", color: "#333" }}>Total:</span>
                <span style={{ fontWeight: "bold", fontSize: "1.1rem", color: "#667eea" }}>
                  ${(total + total * 0.1).toFixed(2)}
                </span>
              </div>

              <button style={{
                width: "100%",
                padding: "12px",
                backgroundColor: "#667eea",
                color: "white",
                border: "none",
                borderRadius: "5px",
                fontSize: "1rem",
                fontWeight: "bold",
                cursor: "pointer",
                marginBottom: "10px",
                transition: "background 0.3s"
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = "#764ba2"}
              onMouseLeave={(e) => e.target.style.backgroundColor = "#667eea"}>
                Proceed to Checkout
              </button>

              <Link to="/equipment" style={{
                display: "block",
                textAlign: "center",
                color: "#667eea",
                textDecoration: "none",
                fontWeight: "bold",
                padding: "10px"
              }}>
                Continue Shopping
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;

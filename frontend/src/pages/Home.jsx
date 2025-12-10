import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div style={{ backgroundColor: "#f5f5f5", minHeight: "100vh" }}>
      {/* Hero Section */}
      <section style={{
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        color: "white",
        padding: "80px 20px",
        textAlign: "center"
      }}>
        <h1 style={{ fontSize: "3.5rem", margin: "0 0 20px 0" }}>Welcome to Gym Equipment Store</h1>
        <p style={{ fontSize: "1.3rem", margin: "0 0 30px 0" }}>Find the best professional gym equipment for your fitness goals</p>
        <Link to="/equipment" style={{
          display: "inline-block",
          padding: "12px 30px",
          backgroundColor: "#ff6b6b",
          color: "white",
          textDecoration: "none",
          borderRadius: "5px",
          fontSize: "1.1rem",
          fontWeight: "bold",
          transition: "background 0.3s"
        }}>Browse Equipment</Link>
      </section>

      {/* Features Section */}
      <section style={{ padding: "60px 20px", maxWidth: "1200px", margin: "0 auto" }}>
        <h2 style={{ textAlign: "center", fontSize: "2.5rem", marginBottom: "50px", color: "#333" }}>Why Choose Us?</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "30px" }}>
          <div style={{
            background: "white",
            padding: "30px",
            borderRadius: "8px",
            boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
            textAlign: "center"
          }}>
            <div style={{ fontSize: "3rem", marginBottom: "15px" }}>💪</div>
            <h3 style={{ color: "#667eea", marginBottom: "10px" }}>Premium Quality</h3>
            <p style={{ color: "#666", lineHeight: "1.6" }}>Top-grade gym equipment from trusted manufacturers worldwide</p>
          </div>

          <div style={{
            background: "white",
            padding: "30px",
            borderRadius: "8px",
            boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
            textAlign: "center"
          }}>
            <div style={{ fontSize: "3rem", marginBottom: "15px" }}>🚚</div>
            <h3 style={{ color: "#667eea", marginBottom: "10px" }}>Fast Delivery</h3>
            <p style={{ color: "#666", lineHeight: "1.6" }}>Quick and reliable shipping to your doorstep</p>
          </div>

          <div style={{
            background: "white",
            padding: "30px",
            borderRadius: "8px",
            boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
            textAlign: "center"
          }}>
            <div style={{ fontSize: "3rem", marginBottom: "15px" }}>💰</div>
            <h3 style={{ color: "#667eea", marginBottom: "10px" }}>Best Prices</h3>
            <p style={{ color: "#666", lineHeight: "1.6" }}>Competitive pricing with regular discounts and offers</p>
          </div>

          <div style={{
            background: "white",
            padding: "30px",
            borderRadius: "8px",
            boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
            textAlign: "center"
          }}>
            <div style={{ fontSize: "3rem", marginBottom: "15px" }}>⭐</div>
            <h3 style={{ color: "#667eea", marginBottom: "10px" }}>Expert Support</h3>
            <p style={{ color: "#666", lineHeight: "1.6" }}>24/7 customer support to help with your queries</p>
          </div>

          <div style={{
            background: "white",
            padding: "30px",
            borderRadius: "8px",
            boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
            textAlign: "center"
          }}>
            <div style={{ fontSize: "3rem", marginBottom: "15px" }}>🔒</div>
            <h3 style={{ color: "#667eea", marginBottom: "10px" }}>Secure Shopping</h3>
            <p style={{ color: "#666", lineHeight: "1.6" }}>100% secure payment methods and data protection</p>
          </div>

          <div style={{
            background: "white",
            padding: "30px",
            borderRadius: "8px",
            boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
            textAlign: "center"
          }}>
            <div style={{ fontSize: "3rem", marginBottom: "15px" }}>✅</div>
            <h3 style={{ color: "#667eea", marginBottom: "10px" }}>Warranty</h3>
            <p style={{ color: "#666", lineHeight: "1.6" }}>Extended warranty on all premium equipment</p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section style={{
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        color: "white",
        padding: "60px 20px"
      }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "40px", textAlign: "center" }}>
          <div>
            <h3 style={{ fontSize: "3rem", margin: "0 0 10px 0" }}>5000+</h3>
            <p style={{ fontSize: "1.2rem", margin: 0 }}>Products Available</p>
          </div>
          <div>
            <h3 style={{ fontSize: "3rem", margin: "0 0 10px 0" }}>50K+</h3>
            <p style={{ fontSize: "1.2rem", margin: 0 }}>Happy Customers</p>
          </div>
          <div>
            <h3 style={{ fontSize: "3rem", margin: "0 0 10px 0" }}>100+</h3>
            <p style={{ fontSize: "1.2rem", margin: 0 }}>Brand Partners</p>
          </div>
          <div>
            <h3 style={{ fontSize: "3rem", margin: "0 0 10px 0" }}>99%</h3>
            <p style={{ fontSize: "1.2rem", margin: 0 }}>Customer Satisfaction</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ padding: "60px 20px", textAlign: "center", backgroundColor: "white" }}>
        <h2 style={{ fontSize: "2.5rem", marginBottom: "20px", color: "#333" }}>Ready to Transform Your Fitness?</h2>
        <p style={{ fontSize: "1.2rem", color: "#666", marginBottom: "30px" }}>Explore our wide range of professional gym equipment today</p>
        <Link to="/equipment" style={{
          display: "inline-block",
          padding: "12px 30px",
          backgroundColor: "#667eea",
          color: "white",
          textDecoration: "none",
          borderRadius: "5px",
          fontSize: "1.1rem",
          fontWeight: "bold",
          transition: "background 0.3s"
        }}>Shop Now</Link>
      </section>

      {/* Footer */}
      <footer style={{ backgroundColor: "#333", color: "white", padding: "30px 20px", textAlign: "center" }}>
        <p>&copy; 2025 Gym Equipment Store. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
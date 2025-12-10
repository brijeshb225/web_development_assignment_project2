import React, { useState } from "react";
import FormInput from "../components/FormInput.jsx";
import { login } from "../api/api.js";
import { useNavigate, Link } from "react-router-dom";

function Login({ setUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!email || !password) {
      alert("Please fill in all fields");
      return;
    }
    
    setLoading(true);
    const res = await login({ email, password });
    setLoading(false);
    
    if (res.user) {
      localStorage.setItem("user", JSON.stringify(res.user));
      setUser(res.user);
      alert("Login successful!");
      navigate("/");
    } else {
      alert(res.message || "Login failed");
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "50px auto" }}>
      <h2>Login</h2>
      <FormInput label="Email" value={email} onChange={setEmail} type="email" />
      <FormInput label="Password" value={password} onChange={setPassword} type="password" />
      <button 
        onClick={handleLogin}
        disabled={loading}
        style={{ padding: "10px 20px", width: "100%", backgroundColor: "#0077cc", color: "white", border: "none", borderRadius: "4px", cursor: "pointer", marginBottom: "15px" }}
      >
        {loading ? "Logging in..." : "Login"}
      </button>
      <p style={{ textAlign: "center" }}>
        Don't have an account? <Link to="/register" style={{ color: "#0077cc", textDecoration: "none" }}>Register here</Link>
      </p>
    </div>
  );
}

export default Login;

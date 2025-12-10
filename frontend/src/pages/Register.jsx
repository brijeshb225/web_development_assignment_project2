import React, { useState } from "react";
import FormInput from "../components/FormInput.jsx";
import { register } from "../api/api.js";
import { useNavigate, Link } from "react-router-dom";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async () => {
    if (!name || !email || !password) {
      alert("Please fill in all fields");
      return;
    }
    
    setLoading(true);
    const res = await register({ name, email, password });
    setLoading(false);
    
    if (res.message) {
      alert("Registration successful! Please login.");
      navigate("/login");
    } else {
      alert(res.error || "Registration failed");
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "50px auto" }}>
      <h2>Register</h2>
      <FormInput label="Name" value={name} onChange={setName} />
      <FormInput label="Email" value={email} onChange={setEmail} type="email" />
      <FormInput label="Password" value={password} onChange={setPassword} type="password" />
      <button 
        onClick={handleRegister}
        disabled={loading}
        style={{ padding: "10px 20px", width: "100%", backgroundColor: "#0077cc", color: "white", border: "none", borderRadius: "4px", cursor: "pointer", marginBottom: "15px" }}
      >
        {loading ? "Registering..." : "Register"}
      </button>
      <p style={{ textAlign: "center" }}>
        Already have an account? <Link to="/login" style={{ color: "#0077cc", textDecoration: "none" }}>Login here</Link>
      </p>
    </div>
  );
}

export default Register;

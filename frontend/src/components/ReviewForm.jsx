import React, { useState } from "react";
import FormInput from "./FormInput.jsx";

function ReviewForm({ equipmentId, onPosted }) {
  const [userName, setUserName] = useState("");
  const [rating, setRating] = useState(5);
  const [text, setText] = useState("");

  const handleSubmit = async () => {
    const body = { userName, rating, text };
    const res = await fetch(`http://localhost:4000/api/equipment/${equipmentId}/reviews`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body)
    });
    const data = await res.json();
    setUserName("");
    setText("");
    setRating(5);
    if (onPosted) onPosted(data);
  };

  return (
    <div style={{ marginTop: "15px", borderTop: "1px solid #ddd", paddingTop: "10px" }}>
      <h4>Leave a Review</h4>
      <FormInput label="Your Name" value={userName} onChange={setUserName} />
      <label>
        Rating:
        <select value={rating} onChange={(e) => setRating(Number(e.target.value))} style={{ marginLeft: "8px" }}>
          {[5,4,3,2,1].map(n => <option key={n} value={n}>{n}</option>)}
        </select>
      </label>
      <div style={{ marginTop: "10px" }}>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows="3"
          style={{ width: "100%", padding: "6px" }}
          placeholder="Write your review..."
        />
      </div>
      <button onClick={handleSubmit} style={{ marginTop: "8px" }}>Submit</button>
    </div>
  );
}

export default ReviewForm;

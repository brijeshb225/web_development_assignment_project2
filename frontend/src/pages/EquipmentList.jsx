import React, { useEffect, useState } from "react";
import { getEquipment } from "../api/api.js";
import EquipmentCard from "../components/EquipmentCard.jsx";
import SearchBar from "../components/SearchBar.jsx";

function EquipmentList() {
  const [equipmentList, setEquipmentList] = useState([]);

  const fetchEquipment = async (q = "") => {
    const data = await getEquipment(q);
    setEquipmentList(data);
  };

  useEffect(() => {
    fetchEquipment();
  }, []);

  return (
    <div style={{ backgroundColor: "#f5f5f5", minHeight: "100vh", paddingBottom: "40px" }}>
      {/* Header */}
      <div style={{
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        color: "white",
        padding: "40px 20px",
        textAlign: "center"
      }}>
        <h2 style={{ fontSize: "2.5rem", margin: "0 0 10px 0" }}>All Gym Equipment</h2>
        <p style={{ fontSize: "1.1rem", margin: 0, opacity: 0.9 }}>Browse our complete collection of professional gym equipment</p>
      </div>

      {/* Search Bar */}
      <div style={{ maxWidth: "1200px", margin: "30px auto", padding: "0 20px" }}>
        <SearchBar onSearch={fetchEquipment} />
      </div>

      {/* Equipment Grid */}
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}>
        {equipmentList.length > 0 ? (
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "25px"
          }}>
            {equipmentList.map(eq => (
              <EquipmentCard key={eq._id} equipment={eq} />
            ))}
          </div>
        ) : (
          <div style={{ textAlign: "center", padding: "40px", backgroundColor: "white", borderRadius: "8px" }}>
            <p style={{ fontSize: "1.1rem", color: "#666" }}>No equipment found. Try searching with different keywords.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default EquipmentList;

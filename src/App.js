import React, { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("https://backend-billmitra.onrender.com/api/test")
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch(() => setMessage("Error fetching backend"));
  }, []);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial", textAlign: "center" }}>
      <h1>BillMitra Dashboard</h1>
      <p>Smart Billing Overview</p>

      <div style={{ display: "flex", justifyContent: "center", gap: "20px", margin: "20px 0" }}>
        <div style={{ padding: "15px", border: "1px solid #ccc", borderRadius: "10px", width: "150px" }}>
          <h2>₹ 12,450</h2>
          <p>Today's Sales</p>
        </div>
        <div style={{ padding: "15px", border: "1px solid #ccc", borderRadius: "10px", width: "150px" }}>
          <h2>46</h2>
          <p>Total Bills</p>
        </div>
        <div style={{ padding: "15px", border: "1px solid #ccc", borderRadius: "10px", width: "150px" }}>
          <h2>18</h2>
          <p>Total Customers</p>
        </div>
      </div>

      <button style={{ padding: "10px 20px", cursor: "pointer" }}>Create New Invoice</button>

      <div style={{ marginTop: "20px" }}>
        <strong>Backend says:</strong> {message || "Loading..."}
      </div>
    </div>
  );
}

export default App;

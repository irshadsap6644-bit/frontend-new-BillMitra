import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [sales, setSales] = useState("Loading...");
  const [bills, setBills] = useState("Loading...");
  const [customers, setCustomers] = useState("Loading...");

  useEffect(() => {
    const backendURL = "https://backend-billmitra.onrender.com";

    fetch(`${backendURL}/api/sales-today`)
      .then(res => res.json())
      .then(data => setSales(data.sales))
      .catch(() => setSales("Error"));

    fetch(`${backendURL}/api/total-bills`)
      .then(res => res.json())
      .then(data => setBills(data.bills))
      .catch(() => setBills("Error"));

    fetch(`${backendURL}/api/total-customers`)
      .then(res => res.json())
      .then(data => setCustomers(data.customers))
      .catch(() => setCustomers("Error"));
  }, []);

  return (
    <div className="dashboard-container">
      <h1 className="title">BillMitra Dashboard</h1>
      <p className="subtitle">Smart Billing Overview</p>

      <div className="cards-section">
        <div className="card">
          <h2>₹ {sales}</h2>
          <p>Today's Sales</p>
        </div>

        <div className="card">
          <h2>{bills}</h2>
          <p>Total Bills</p>
        </div>

        <div className="card">
          <h2>{customers}</h2>
          <p>Total Customers</p>
        </div>
      </div>

      <div className="action-section">
        <button className="btn">Create New Invoice</button>
      </div>
    </div>
  );
}

export default App;

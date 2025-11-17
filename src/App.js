import React, { useState, useEffect } from "react";
import "./App.css";
import { backendURL } from "./utils/api";

function App() {
  const [sales, setSales] = useState("Loading...");
  const [bills, setBills] = useState("Loading

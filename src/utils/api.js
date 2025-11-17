const BASE_URL = "http://localhost:5000";  

export const fetchSalesToday = async () => {
  const res = await fetch(`${BASE_URL}/api/sales-today`);
  return res.json();
};

export const fetchTotalBills = async () => {
  const res = await fetch(`${BASE_URL}/api/total-bills`);
  return res.json();
};

export const fetchTotalCustomers = async () => {
  const res = await fetch(`${BASE_URL}/api/total-customers`);
  return res.json();
};

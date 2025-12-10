const API_BASE = "http://localhost:4000/api";

export async function getEquipment(q = "") {
  const url = `${API_BASE}/equipment${q ? `?q=${encodeURIComponent(q)}` : ""}`;
  const res = await fetch(url);
  return res.json();
}

export async function getEquipmentById(id) {
  const res = await fetch(`${API_BASE}/equipment/${id}`);
  return res.json();
}

export async function postReview(id, body) {
  const res = await fetch(`${API_BASE}/equipment/${id}/reviews`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body)
  });
  return res.json();
}

export async function login(body) {
  const res = await fetch(`${API_BASE}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body)
  });
  return res.json();
}

export async function register(body) {
  const res = await fetch(`${API_BASE}/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body)
  });
  return res.json();
}

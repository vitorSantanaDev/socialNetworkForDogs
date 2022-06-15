import { API_URL } from "../api/api";

export function LOST_PASSWORD(body) {
  return {
    url: `${API_URL}api/password/lost`,
    options: {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    },
  };
}

export function RESET_PASSWORD(body) {
  return {
    url: `${API_URL}api/password/reset`,
    options: {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    },
  };
}

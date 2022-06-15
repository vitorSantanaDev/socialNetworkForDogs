import { API_URL } from "../api/api";

export function USER_GET(token) {
  return {
    url: API_URL + "api/user",
    options: {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
      },
    },
  };
}
export function USER_POST(body) {
  return {
    url: API_URL + "api/user",
    options: {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    },
  };
}

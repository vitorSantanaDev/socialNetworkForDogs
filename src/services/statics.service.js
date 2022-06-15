import { API_URL } from "../api/api";

export function GET_STATICS() {
  return {
    url: `${API_URL}api/stats`,
    options: {
      method: "GET",
      headers: {
        Authorization: "Bearer " + window.localStorage.getItem("token"),
      },
    },
  };
}

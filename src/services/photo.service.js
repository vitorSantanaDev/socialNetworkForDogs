import { API_URL } from "../api/api";

export function PHOTO_GET(id) {
  return {
    url: `${API_URL}api/photo/${id}`,
    options: {
      method: "GET",
      cache: "no-store",
    },
  };
}

export function PHOTO_POST(formData, token) {
  return {
    url: API_URL + "api/photo",
    options: {
      method: "POST",
      headers: {
        Authorization: "Bearer " + token,
      },
      body: formData,
    },
  };
}

export function PHOTO_DELETE(id) {
  return {
    url: `${API_URL}api/photo/${id}`,
    options: {
      method: "DELETE",
      headers: {
        Authorization: "Bearer " + window.localStorage.getItem("token"),
      },
    },
  };
}

export function GET_ALL_PHOTOS({ page, total, user }) {
  return {
    url: `${API_URL}api/photo/?_page=${page}&_total=${total}&_user=${user}`,
    options: {
      method: "GET",
      cache: "no-store",
    },
  };
}

export function GET_PHOTO_BY_ID(id) {
  return {
    url: `${API_URL}api/photo/${id}`,
  };
}

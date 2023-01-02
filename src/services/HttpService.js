const backendApiUrl = "http://localhost:8082";

export const PostWithAuth = (url, body) => {
  var request = fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("tokenKey"),
    },
    body: JSON.stringify(body),
  });

  return request;
};

export const PostWithoutAuth = (url, body) => {
  var request = fetch(backendApiUrl + url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  return request;
};

export const ChangeTrackerActivity = (userId) => {
  fetch("/api/change?listRequest=" + userId, { // ???
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const GetWithAuth = (url) => {
  var request = fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("tokenKey"),
    },
  });

  return request;
};

export const DeleteWithAuth = (url) => {
  var request = fetch(url, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("tokenKey"),
    },
  });

  return request;
};

export const RefreshToken = () => {
  var request = fetch("/api/auth/refresh", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userId: localStorage.getItem("currentUser"),
      refreshToken: localStorage.getItem("refreshKey"),
    }),
  });
  return request;
};

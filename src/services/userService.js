const backendApiUrl = "http://localhost:8082/api";

export const setUserDetails = (body) => {
  var request = fetch("/api/client", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  return request;
};

export const GetMyUsers = (currentUserId) => {
  var request = fetch(backendApiUrl + "/client/filter?userId=" + currentUserId, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  return request;
};

export const IsTracker = () => {
  return localStorage.getItem("role") === "ROLE_TRACKER";
};

export const IsTrackerAvaliable = () => {
  return IsTracker && localStorage.getItem("trackerAvaliability") === true;
};

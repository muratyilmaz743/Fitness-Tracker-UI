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
  var request = fetch("/api/client/filter?trackerId=" + currentUserId, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });

  return request;
};

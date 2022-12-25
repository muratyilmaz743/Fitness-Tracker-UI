export const GetAllTeachers = () => {
  var request = fetch("http://localhost:8082/api/tracker/getAll", {
    method: "GET",
  });

  return request;
};

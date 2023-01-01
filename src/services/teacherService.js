export const GetAllTeachers = () => {
  var request = fetch("http://localhost:8082/api/tracker/getAll", {
    method: "GET",
  });

  return request;
};

export const GetAllStudents = (trackerId) => {
  var request = fetch("http://localhost:8082/api/trainingProgram/getAllByUserId?userId=" + trackerId, {
    method: "GET",
  });

  return request;
};

const backendApiUrl = "http://localhost:8082/api/";

export const GetProgram = () => {
  var request = fetch(backendApiUrl + "trainingProgram/getAll", {
    method: "GET",
  });
  return request;
};

export const GetExercise = (target) => {
  const url = backendApiUrl + "fitnessMove/filter?target=" + target;

  var request = fetch(url, {
    method: "GET",
  });
  return request;
};

export const GetAllExercises = () => {
  const url = backendApiUrl + "fitnessMove/getAll";
  var request = fetch(url, {
    method: "GET",
  });
  return request;
};

export const AddExercise = (body) => {
  fetch("/api/trainingProgram", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
};

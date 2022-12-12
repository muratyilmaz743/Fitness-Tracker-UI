export const GetProgram = () => {
    var request = fetch('http://localhost:8082/api/trainingProgram/getAll',  {
        method: "GET", 
      })

    return request
}
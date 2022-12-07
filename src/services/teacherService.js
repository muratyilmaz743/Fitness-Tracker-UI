export const GetAllTeachers = () => {
    var request = fetch('http://localhost:8082/api/client/getAll',  {
        method: "POST", 
      })

    return request
}
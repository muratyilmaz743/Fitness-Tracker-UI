export const GetAllTeachers = () => {
    var request = fetch('http://localhost:8082/api/trackerController/listAll',  {
        method: "GET", 
      })

    return request
}
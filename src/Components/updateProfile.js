import React from "react";
import { UpdateUser } from "../services/userService";
export default function updateProfile() {
  return (
    <div>
      <div className="w-full h-screen flex justify-center items-center style-form-wrapper">
        <form>
          <h1 className="text-xl py-2 mb-7">Update Your Information</h1>

          <div className="flex flex-wrap -mx-3 mb-2">
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-weight"
              >
                Weight
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-weight"
                type="text"
                placeholder="95"
              />
            </div>

            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-height"
              >
                Height
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-height"
                type="text"
                placeholder="180"
              />
            </div>
          </div>
          {/* body */}
          <div className="flex flex-wrap -mx-3 mb-2">
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-hip"
              >
                Hip Circumference
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-hip"
                type="text"
                placeholder="95"
              />
            </div>
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-neck"
              >
                Neck Girth
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-neck"
                type="text"
                placeholder="95"
              />
            </div>

            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-garth"
              >
                Garth
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-garth"
                type="text"
                placeholder="180"
              />
            </div>
          </div>
          {/* third row */}
          <div className="flex flex-wrap -mx-3 mb-2 w-full ">
            <div className="md:w-1/3 px-3 mb-6 md:mb-0">
              <button
                type="button"
                class="mt-5 rounded-md bg-black px-10 py-2 text-white"
                onClick={updateMyData}
              >
                Update
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}


const updateMyData = () => {
  const currentUser = localStorage.getItem("currentUser");
  if (!validateAreas()) {
    alert("Please fill all the fields!")
    return;
  }

  var config = {
    garth: parseInt(document.getElementById("grid-garth").value),
    neckGirth: parseInt(document.getElementById("grid-neck").value),
    hipCircumference: parseInt(document.getElementById("grid-hip").value),
    height: parseInt(document.getElementById("grid-height").value),
    weight: parseInt(document.getElementById("grid-weight").value),
  };

  UpdateUser(currentUser, config).then(
    (result) => {
      alert("Profile Updated Succesfully");
      console.log(result.text);
    },
    (error) => {
      alert("There is a mistake");
      console.log(error.text);
    }
  );
}

const validateAreas = () => {
  return document.getElementById("grid-garth").value !== "" &&
  document.getElementById("grid-garth").value !== "" &&
  document.getElementById("grid-garth").value !== "" &&
  document.getElementById("grid-garth").value !== "" &&
  document.getElementById("grid-garth").value !== "";

}

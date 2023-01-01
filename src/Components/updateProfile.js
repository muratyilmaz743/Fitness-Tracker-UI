import React from "react";

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
                for="grid-Weight"
              >
                Weight
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-Weight"
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
                for="grid-Hip"
              >
                Hip Circumference
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-Hip"
                type="text"
                placeholder="95"
              />
            </div>
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-Neck"
              >
                Neck Girth
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-Neck"
                type="text"
                placeholder="95"
              />
            </div>

            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-Garth"
              >
                Garth
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-Garth"
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

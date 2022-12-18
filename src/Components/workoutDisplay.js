import React from "react";

function WorkoutDisplay({ url, name }) {
  return (
    <>
      <div className="h-56 w-56 p-4 border-4 border-black m-6 rounded-xl min-w-[14rem] bg-white">
        <div class="mb-4 h-full">
          <p class="text-center bg-blue-200 text-black font-bold py-2 px-4 rounded-full mt-2">
            {name}
          </p>
          <div className="w-full flex justify-center">
            <img className="h-28" src={url} alt="gif of move" />
          </div>
        </div>
      </div>
    </>
  );
}

export default WorkoutDisplay;

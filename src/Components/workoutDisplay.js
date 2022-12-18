import React from "react";

function WorkoutDisplay({ url, name}) {
  return (
    <>
      <div
        className="h-56 w-56 p-4 border-4 border-black m-6 rounded-xl min-w-[14rem]"
      >
        <div class="mb-4 h-full">
          <p class="text-center bg-blue-200 text-black font-bold py-2 px-4 rounded-full mt-2">
            {name}
          </p>
          <img src={url} alt="gif of move"  width="250" />
        </div>
      </div>
    </>
  );
}

export default WorkoutDisplay;

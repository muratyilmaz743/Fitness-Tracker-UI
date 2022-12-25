import React from "react";
import { AddExercise } from "../services/exerciseService";

function WorkoutDisplay({ url, name, isTracker = false }) {
  const addExercise = () => {
    AddExercise(name)
  };
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
        {isTracker === true && (
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-2" 
          onClick={addExercise}
          >
            Ekle
          </button>
        )}
      </div>
    </>
  );
}

export default WorkoutDisplay;

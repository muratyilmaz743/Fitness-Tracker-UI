import React from "react";
import { AddExercise } from "../services/exerciseService";
import { IsTracker } from "../services/userService";

function WorkoutDisplay({ url, name, id, isTracker = false }) {
  const addExercise = () => {
    var selectedUserId = parseInt(document.getElementById("grid-user").value);
    var config = {
      setNumber: parseInt(document.getElementById("grid-set").value),
      repetitionNumber: parseInt(document.getElementById("grid-reps").value),
      note: "",
      client: {
        id: selectedUserId,
      },
      fitnessMove: {
        id: id,
      },
    };
    AddExercise(config);
  };
  return (
    <>
      <div className="h-56 w-56 p-4 border-4 border-black m-6 mb-[4rem] rounded-xl min-w-[14rem] bg-white">
        <div class="mb-4 h-full">
          <p class="text-center bg-blue-200 text-black font-bold py-2 px-4 rounded-full mt-2">
            {name}
          </p>
          <div className="w-full flex justify-center">
            <img className="h-28" src={url} alt="gif of move" />
          </div>
        </div>
        {IsTracker && (
          <div id="exerciseAddings" className="grid justify-center">
            <div className="flex justify-evenly">
            <input
              className="appearance-none w-[45%] bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-set"
              type="text"
              placeholder="Sets"
            />
            <input
              className="appearance-none w-[45%] bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-reps"
              type="text"
              placeholder="Reps"
            />
            </div>
            <button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-2"
              onClick={addExercise}
            >
              Ekle
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default WorkoutDisplay;

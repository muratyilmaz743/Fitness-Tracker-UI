import React from "react";
import { AddExercise } from "../services/exerciseService";

function WorkoutDisplay({ url, name, id, isTracker = false }) {
  const userTracker = localStorage.getItem("role") === "ROLE_TRACKER";

  const addExercise = (el) => {
    var selectedUserId = parseInt(document.getElementById("grid-user").value);
    var config = {
      setNumber: parseInt(
        el.target.closest(".settingsWrapper").firstChild.lastChild.firstChild
          .childNodes[0].firstChild.value
      ),
      repetitionNumber: parseInt(
        el.target.closest(".settingsWrapper").firstChild.lastChild.firstChild
          .childNodes[0].lastChild.value
      ),
      note: el.target.closest(".settingsWrapper").firstChild.lastChild
        .firstChild.childNodes[1].value,
      client: {
        id: selectedUserId,
      },
      fitnessMove: {
        id: id,
      },
    };
    
    AddExercise(config);
    cancelNote();
  };
  const addNotes = (el) => {
    var settings =
      el.target.closest(".settingsWrapper").firstChild.lastChild.firstChild;
    var image =
      el.target.closest(".settingsWrapper").firstChild.lastChild.lastChild;

    settings.classList.remove("hidden");
    image.classList.add("hidden");
  };

  const cancelNote = (el) => {
    var settings =
      el.target.closest(".settingsWrapper").firstChild.lastChild.firstChild;
    var image =
      el.target.closest(".settingsWrapper").firstChild.lastChild.lastChild;

    settings.classList.add("hidden");
    image.classList.remove("hidden");
  };
  return (
    <>
      <div className="h-56 w-56 p-4 border-4 border-black m-6 mb-[4rem] rounded-xl min-w-[14rem] bg-white settingsWrapper">
        <div class="mb-4 h-full">
          <p class="text-center bg-blue-200 text-black font-bold py-2 px-4 rounded-full mt-2">
            {name}
          </p>
          <div className="w-full flex justify-center">
            <div id="settings" className="hidden mt-2 text-center">
              <div className="flex justify-evenly">
                <input
                  className="appearance-none w-[45%] bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-set"
                  type="text"
                  placeholder="Sets"
                />
                <input
                  className="w-[45%] appearance-none bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-reps"
                  type="text"
                  placeholder="Reps"
                />
              </div>
              <input
                className="w-full appearance-none mt-2 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-notes"
                type="text"
                placeholder="Notes"
              />
              <div className="flex">
                <button
                  class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-2"
                  onClick={(e) => addExercise(e)}
                >
                  Programa Ekle
                </button>
                <button
                  class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full mt-2"
                  onClick={(e) => cancelNote(e)}
                >
                  X
                </button>
              </div>
            </div>
            <img className="h-28" src={url} alt="gif of move" />
          </div>
        </div>
        {userTracker === true && (
          <div id="exerciseAddings" className="grid justify-center">
            <div className="flex justify-evenly">
              <button
                id="addingButton"
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-2"
                onClick={(e) => addNotes(e)}
              >
                Ekle
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default WorkoutDisplay;

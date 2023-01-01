import React from "react";

function Workout({ setNumber, repetitionNumber, note, gifUrl, name }) {
  var notesDisplay = note.split(",");
  const noteItems = notesDisplay.map((note) => <li>{note}</li>);

  console.log(noteItems);

  return (
    <>
      <div className="h-[18rem] w-56 p-4 border-4 border-black m-6 rounded-xl min-w-[14rem]">
        <div class="mb-4 h-full">
          <p class="text-center bg-blue-200 text-black font-bold py-2 px-4 rounded-full mt-2">
            {name}
          </p>
          <img className="h-28" src={gifUrl} alt="gif of move" />
          <p className="mt-8 ml-4">
            <ul className="list-disc">
              <li className="font-bold">
                {setNumber} set {repetitionNumber} tekrar
              </li>
              {noteItems}
            </ul>
          </p>
        </div>
      </div>
    </>
  );
}

export default Workout;

import React from "react";

function Workout({ url, name, svg, notes }) {
  var notesDisplay = notes.split(",");
  const noteItems = notesDisplay.map((note) => <li>{note}</li>);

  console.log(noteItems);

  return (
    <>
      <div
        id=""
        className="h-56 w-56 p-4 border-4 border-black m-6 rounded-xl min-w-[14rem]"
      >
        <div class="mb-4 h-full">
          <p class="text-center bg-blue-200 text-black font-bold py-2 px-4 rounded-full mt-2">
            {name}
          </p>
          <p className="mt-8 ml-4"><ul className="list-disc">{noteItems}</ul></p>
        </div>
      </div>
    </>
  );
}

export default Workout;

import React from "react";

function Meal({ url, name, svg, notes }) {
  return (
    <>
      <div
        id="teacherBox"
        className="box-border h-56 w-56 p-4 border-4 m-6 rounded-xl min-w-[14rem]"
      >
        <div class="mb-4 text-center h-full">
          <p class="bg-blue-200 text-black font-bold py-2 px-4 rounded-full mt-2">
            {name}
          </p>
          <p className="mt-8">
            {notes}
          </p>
        </div>
      </div>
    </>
  );
}

export default Meal;

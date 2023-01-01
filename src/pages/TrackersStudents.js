import React from "react";
import Students from "../Components/trackersStudents";
export default function TrackersStudents() {
  return (
    <div>
      <div className="container mx-auto px-40">
        <strong className="text-2xl ">My Student List</strong>
      </div>
      <div class="grid grid-cols-4 gap-3 justify-items-center">
        <Students />
        <Students />
        <Students />
        <Students />
      </div>
    </div>
  );
}

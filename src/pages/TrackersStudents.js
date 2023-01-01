import React from "react";
import Students from "../Components/trackersStudents";
import { GetAllStudents } from "../services/teacherService";

export default function TrackersStudents() {
  let trackersStudents = [];
  const trackerId = localStorage.getItem("currentUser");

  GetAllStudents(trackerId).then((res) =>
    res.json().then((students) => {
      for (const student of students) {
        trackersStudents.push(student);
      }
    })
  );

  return (
    <div>
      <div className="container mx-auto px-40">
        <strong className="text-2xl mb-[4rem]">My Student List</strong>
      </div>
      <div class="px-40 grid grid-cols-3 gap-3 justify-items-center">
        {trackersStudents.map((student) => {
          var realGender = student.gender === true ? "Male" : "Female"
          return (
            <>
              <Students
                fullName={student.fullName}
                weight={student.weight}
                height={student.height}
                garth={student.garth}
                hip={student.hipCircumference}
                neck={student.neckGirth}
                basal={student.basalMetabolism}
                massIndex={student.bodyMassIndex}
                smoking={student.isSmoke}
                sportDesc={student.sportDescription}
                target={student.target.value}
                gender={realGender}
              />
            </>
          );
        })}
      </div>
    </div>
  );
}

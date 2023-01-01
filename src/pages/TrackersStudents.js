import React from "react";
import { Component } from "react";
import Students from "../Components/trackersStudents";
import { GetMyUsers } from "../services/userService";

class TrackersStudents extends Component {
  state = {
    trackersStudents: [],
  };

  constructor() {
    super();

    const trackerId = localStorage.getItem("currentUser");

    GetMyUsers(trackerId).then((res) =>
      res.json().then((students) => {
        let p = [...this.state.trackersStudents];
        for (let i = 0; i < students.length; i++) {
          p.push(students[i]);
        }
        this.setState({ trackersStudents: p });
      })
    );
  }

  render() {
    return (
      <div>
        <div className="container mx-auto px-40">
          <strong className="text-2xl mb-[4rem]">My Student List</strong>
        </div>
        <div class="px-40 grid grid-cols-3 gap-3 justify-items-center">
          {this.state.trackersStudents.map((student) => {
            var realGender = student.gender === true ? "Male" : "Female";

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
}

export default TrackersStudents;

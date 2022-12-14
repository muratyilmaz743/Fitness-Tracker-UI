import { Component } from "react";
import { GetProgram } from "../services/exerciseService";
import Workout from "../Components/workout";
import Footers from "../Components/footer";

class Exercises extends Component {
  state = {
    program: [],
  };

  constructor() {
    super();

    const userId = localStorage.getItem("currentUser");

    GetProgram(userId).then((res) =>
      res.json().then((result) => {
        let p = [...this.state.program];
        for (let i = 0; i < result.length; i++) {
          p.push(result[i]);
        }
        this.setState({ program: p });
      })
    );
  }

  render() {
    const current = new Date();
    const date = `${current.getDate()}/${
      current.getMonth() + 1
    }/${current.getFullYear()}`;
    return (
      <>
        <div className="container mx-auto px-10">
          <div class="mt-8 text-center mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-4xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-12 h-12 inline-block mr-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
              />
            </svg>
            <span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
              {date}
            </span>
          </div>
          <div className="container-md h-full bg-gradient-to-r from-cyan-50 to-blue-50 rounded-3xl">
            <div className="text-left border-black-500 p-4 w-full">
              <span class="bg-clip-text text-2xl border-b-4 p-4">
                Workout Plan
              </span>
              <div className="grid grid-cols-3 gap-4">
                {this.state.program.map((exercise) => {
                  return (
                    <Workout
                      setNumber={exercise.setNumber}
                      repetitionNumber={exercise.repetitionNumber}
                      note={exercise.note}
                      gifUrl={exercise.gifUrl}
                      name={exercise.name}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <Footers />
      </>
    );
  }
}

export default Exercises;

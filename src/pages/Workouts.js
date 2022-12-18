import { Component } from "react";
import { GetAllExercises, GetExercise } from "../services/exerciseService";

import FilterButton from "../Components/filteringButton";
import WorkoutDisplay from "../Components/workoutDisplay";
class Workouts extends Component {
  state = {
    workoutList: [],
  };

  constructor() {
    super();
    GetAllExercises().then((res) =>
      res.json().then((result) => {
        let workout = [...this.state.workoutList];
        for (let i = 0; i < 20; i++) {
          workout.push(result[i]);
        }
        this.setState({ workoutList: workout });
      })
    );
  }

  allExercises = () => {
    GetAllExercises().then((res) =>
      res.json().then((result) => {
        let move = [...this.state.workoutList];
        for (let i = 0; i < 5; i++) {
          move.push(result[i]);
        }
        this.setState({ workoutList: move });
      })
    );
  };

  changeFilter = (filter) => {
    GetExercise(filter).then((res) =>
      res.json().then((result) => {
        let move = [...this.state.workoutList];
        for (let i = 0; i < 5; i++) {
          move.push(result[i]);
        }
        this.setState({ workoutList: move });
      })
    );
  };

  render() {
    return (
      <div className="container mx-auto px-10">
        <div className="container-md h-screen bg-gradient-to-r from-cyan-50 to-blue-50 rounded-3xl">
          <div className="text-left border-black-500 p-4 w-full">
            <section className="text-center">
              <FilterButton name={"Hepsi"} fire={() => this.allExercises()} />
              <FilterButton
                name={"Karın"}
                fire={() => this.changeFilter("abs")}
              />
              <FilterButton
                name={"Sırt"}
                fire={() => this.changeFilter("back")}
              />
              <FilterButton
                name={"Kol"}
                fire={() => this.changeFilter("arms")}
              />
            </section>
            <div class="bg-clip-text text-5xl p-4">Workouts</div>
            <div className="grid grid-cols-5 gap-4 justify-items-center">
              {this.state.workoutList.map((workout) => {
                return (
                  <>
                    <WorkoutDisplay name={workout.name} url={workout.gifUrl} />
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Workouts;

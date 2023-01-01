import { Component } from "react";
import { GetAllExercises, GetExercise } from "../services/exerciseService";
import { GetMyUsers, IsTracker } from "../services/userService";

import FilterButton from "../Components/filteringButton";
import WorkoutDisplay from "../Components/workoutDisplay";
class Workouts extends Component {
  state = {
    workoutList: [],
    title: "Bütün Egzersizler",
    userTracker: localStorage.getItem("role") === "ROLE_TRACKER",
  };

  constructor() {
    super();
    this.isTracker = localStorage.getItem("role") === "ROLE_TRACKER";
    const currentUserId = localStorage.getItem("currentUser");
    console.log(this.isTracker);

    GetAllExercises().then((res) =>
      res.json().then((result) => {
        let workout = [];
        for (let i = 0; i < 15; i++) {
          workout.push(result[i]);
        }
        this.setState({ workoutList: workout });
      })
    );

    if (this.state.userTracker === true) {
      GetMyUsers(currentUserId).then((res) =>
        res.json().then((userList) => {
          for (let i = 0; i < 15; i++) {
            var myUsers = document.getElementById("grid-user");
            myUsers.options[myUsers.options.length] = new Option(
              userList[i].fullName,
              userList[i].clientId
            );
          }
        })
      );
    }
  }

  getActiveFilter(filter) {
    switch (filter) {
      case "abs":
        this.setState({ title: "Karın Egzersizleri" });
        break;
      case "lats":
        this.setState({ title: "Sırt Egzersizleri" });
        break;
      case "pectorals":
        this.setState({ title: "Göğüs Egzersizleri" });
        break;
      default:
        this.setState({ title: "Bütün Egzersizler" });
    }
  }

  allExercises = () => {
    GetAllExercises().then((res) =>
      res.json().then((result) => {
        let move = [];
        for (let i = 0; i < 15; i++) {
          move.push(result[i]);
        }
        this.setState({ workoutList: move });
      })
    );
    this.getActiveFilter();
  };

  changeFilter = (filter) => {
    GetExercise(filter).then((res) =>
      res.json().then((result) => {
        let move = [];
        for (let i = 0; i < 15; i++) {
          move.push(result[i]);
        }
        this.setState({ workoutList: move });
      })
    );
    this.getActiveFilter(filter);
  };

  render() {
    return (
      <div className="container mx-auto px-10">
        <div className="container-md h-full bg-gradient-to-r from-cyan-50 to-blue-50 rounded-3xl m-5">
          <div className="text-left border-black-500 p-4 w-full">
            <section className="text-center">
              <FilterButton name={"Hepsi"} fire={() => this.allExercises()} />
              <FilterButton
                name={"Karın"}
                fire={() => this.changeFilter("abs")}
              />
              <FilterButton
                name={"Sırt"}
                fire={() => this.changeFilter("lats")}
              />
              <FilterButton
                name={"Göğüs"}
                fire={() => this.changeFilter("pectorals")}
              />
            </section>
            <select
              className="block appearance-none w-56 bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-user"
            ></select>
            <div class="bg-clip-text text-5xl p-4">{this.state.title}</div>
            <div className="grid grid-cols-5 gap-4 justify-items-center">
              {this.state.workoutList.map((workout) => {
                return (
                  <>
                    <WorkoutDisplay
                      name={workout.name}
                      url={workout.gifUrl}
                      id={workout.id} //???
                      isTracker={true}
                    />
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

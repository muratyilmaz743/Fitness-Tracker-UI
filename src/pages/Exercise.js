import { Component } from "react";
import { GetProgram } from "../services/exerciseService";

class Exercises extends Component {


  state = {
    program: [],
  };
  
  constructor() {
    super();

    GetProgram().then((res) =>
      res.json().then((result) => {
        let p = [...this.state.program];
        for (let i = 0; i < 20; i++) {
          p.push(result[i]);
        }
        this.setState({ teachers: p });
      })
    );
  }


  render() {
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
    return (
      <div className="container mx-auto px-40">
          <h1 class="text-center mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-4xl"><span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">{date}</span></h1>
          <div className="container-md h-96 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-3xl"></div>
      </div>
    )
  }
}

export default Exercises;

import { Component } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

class Stats extends Component {
  constructor() {
    super();
    this.state = {
      date: "",
      weight: "",
      fat: "",
    };
    this.daychanged = this.daychanged.bind(this);
  }

  daychanged(day) {
    this.setState({date: "", weight: "78", fat: "%11" });
  }

  render() {
    const current = new Date();
    const date = `${current.getDate()}/${
      current.getMonth() + 1
    }/${current.getFullYear()}`;
    return (
      <>
        <html>
          <body>
            <div id="statisticsPage">
              <section className="">
                <div class="calendar">
                  <Calendar onClickDay={() => this.daychanged(this)} />
                </div>

                <div class="attributes mt-20 container-md h-screen bg-gradient-to-r from-cyan-50 to-blue-50 rounded-3xl text-center">
                  <span class="calendarDays text-5xl text-center top-16 text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400 font-bold">{date}</span>
                  <ul className="absolute top-1/4">
                    <li id="attribute" >
                      <label class="ratios">Weight: {this.state.weight} </label>
                    </li>
                    <li id="attribute">
                      <label class="ratios"> Fat Rate: {this.state.fat}</label>
                    </li>
                  </ul>
                </div>
              </section>
            </div>
          </body>
        </html>
      </>
    );
  }
}

export default Stats;

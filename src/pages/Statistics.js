import { Component } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

class Stats extends Component {
  constructor() {
    super();
    this.state = {
      weight: "",
      fat: "",
    };
    this.daychanged = this.daychanged.bind(this);
  }

  daychanged() {
    this.setState({ weight: "123", fat: "11" });
  }

  render() {
    return (
      <>
        <html>
          <body>
            <div id="statisticsPage">
              <section>
                <div class="calendar">
                  <Calendar onChange={this.daychanged} />
                </div>

                <div class="attributes">
                  <label class="calendarDays">Month/Day/Year</label>
                  <br />
                  <ul>
                    <li id="attribute">
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

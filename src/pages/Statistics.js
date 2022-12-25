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
    this.setState({date: "", weight: "82 KG", fat: "%14" });
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
              <section>
                <div class="calendar ml-36 mt-48 rounded-l-3xl bg-gradient-to-r from-[#86A8E7] to-[#4e8397]">
                  <Calendar onClickDay={() => this.daychanged(this)} />
                </div>

                <div class="attributes ml-12 mt-24 h-[30rem] container-md bg-gradient-to-r from-[#4e8397] to-[#344a53] rounded-3xl text-center">
                  <span class="calendarDays text-5xl text-center top-16 text-transparent bg-clip-text bg-gradient-to-r to-emerald-200 from-sky-200 font-bold">{date}</span>
                  <ul className="absolute top-1/6">
                    <li id="attribute" >
                      <label class="ratios"><span className="text-2xl text-[#d5cabd] underline">Weight:</span> <br/><p className="font-bold text-5xl pt-4 ml-80 mt-36 fixed text-[#d9f2fd]"> {this.state.weight}</p></label>
                    </li>
                    <li id="attribute">
                      <label class="ratios  mt-4"><span className="text-2xl text-[#d5cabd] underline"> Fat Rate:</span> <br/> <p className="font-bold text-5xl pt-4 ml-80 mt-36 fixed text-[#d9f2fd]">{this.state.fat}</p></label>
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

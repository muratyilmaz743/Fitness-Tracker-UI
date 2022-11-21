import React from "react";

class Main extends React.Component {
  render() {
    return (
      <>
        <header className="bg-slate-300/20 flex justify-center ">
          <strong className="text-center">Fitness Tracker</strong>
        </header>

        <div id="slogan">
          <ul>
            <li>
              <strong>TRAIN SMARTER</strong>
            </li>
            <li>
              <strong>ACHIEVE FASTER</strong>
            </li>
          </ul>

          <div id="buttons">
            <button class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border border-blue-700 hover:border-blue-500 rounded">
              Button
            </button>
            <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-bold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
              Button
            </button>
          </div>
        </div>
      </>
    );
  }
}
export default Main;

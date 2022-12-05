import React from "react";

function Header({ url, name, svg }) {
  return (
    <>
        <header className="bg-slate-300/20 flex justify-center sticky">
          <strong className="align-middle inline text-5xl text-[#1746A2] mt-4">
            Fitness Tracker
          </strong>
        </header>
    </>
  );
}

export default Header;

import React from "react";

function MenuItem({ url, name, svg }) {
  return (
    <>
      <div>
        <div className="md:container md:mx-auto">
          <a href={url} className="box-border h-56 w-56 p-4 border-4 m-6 flex items-end hover:bg-sky-100 ">
            <div className="absolute pb-20">{svg}</div>
            <div>
              <p className="text-4xl pt-8">
                {name}
              </p>
            </div>
          </a>
        </div>
      </div>
    </>
  );
}

export default MenuItem;

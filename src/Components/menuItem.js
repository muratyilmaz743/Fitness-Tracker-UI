import React from "react";

function MenuItem({ url, name, svg }) {
  return (
    <>
      <div>
        <div className="md:container md:mx-auto flex justify-items-center opacity-75">
          <a href={url} className="border-double box-border h-56 w-56 p-4 border-8 m-6 flex items-end hover:bg-sky-100 items-center justify-items-center rounded-xl bg-zinc-50">
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

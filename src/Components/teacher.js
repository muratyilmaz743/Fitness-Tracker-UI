import React from "react";
import Rating from "../Components/ratingStars";

const Teacher = ({openModal, name}) => {

    const handleOpenModal = () => {
        openModal();
    }
  return (
    <>
      <div id="teacherBox" className="box-border h-56 w-56 p-4 border-4 m-6">
        <div class="mb-4">
          <img
            src="https://mdbootstrap.com//img/Photos/Square/1.jpg"
            class="max-w-full h-28 rounded-full"
            alt=""
          />
        </div>
        <Rating />
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-2"
          onClick={handleOpenModal}
        >
          Murat
        </button>
      </div>
    </>
  );
}


export default Teacher;

import React from "react";
import Rating from "../Components/ratingStars";

const Teacher = ({
  imgUrl,
  openModal,
  name,
  email,
  rate,
  experienceYear,
  description,
}) => {
  var mailto = "mailto:" + email;

  const handleOpenModal = () => {
    openModal();
  };
  return (
    <>
      <div id="teacherBox" className="box-border h-56 w-56 p-4 border-4 m-6">
        <div class="mb-4">
          <img
            src={imgUrl}
            class="max-w-full h-28 rounded-full"
            alt="teacher"
          />
        </div>

        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-2"
          onClick={handleOpenModal}
        >
          {name}
          {experienceYear}
          {description}
          <a href={mailto}>{email}</a>
        </button>
      </div>
    </>
  );
};

export default Teacher;

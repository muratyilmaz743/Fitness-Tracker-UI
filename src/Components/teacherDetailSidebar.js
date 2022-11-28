import React from "react";
import Rating from "./ratingStars";

class TeacherDetail extends React.Component {
  render() {
    return (
      <>
        <div class="mb-4 h-28">
          <img
            src="https://mdbootstrap.com//img/Photos/Square/1.jpg"
            class="max-w-full h-64 rounded-full"
            alt=""
          />
        </div>
        <i>Helena Benton</i>
        <Rating />
        <span>About Me:</span>
        <p>about me</p>
      </>
    );
  }
}

export default TeacherDetail;

import { Component } from "react";
import React from "react";
import ReactModal from "react-modal";
import { GetAllTeachers } from "../services/teacherService";
import Rating from "../Components/ratingStars";

import Teacher from "../Components/teacher";
import Footer from "../Components/footer";

class TeacherList extends Component {
  state = {
    showModal: false,
    content: "asdf",
    imgUrl: "",
    name: "",
    email: "",
    gender: "",
    phone: "",
    teachers: [],
  };

  constructor() {
    super();

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);

    GetAllTeachers().then((res) =>
      res.json().then((result) => {
        let teacher = [...this.state.teachers];
        for (let i = 0; i < 20; i++) {
          teacher.push(result[i]);
        }
        this.setState({ teachers: teacher });
      })
    );
  }

  addToList(element) {
    this.setState({ teachers: this.teachers.concat(element) });
  }

  handleOpenModal(image, name, email, gender, rate) {
    this.setState({
      showModal: true,
      imgUrl: image,
      name: name,
      email: email,
      gender: gender,
      rate: rate,
    });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }

  render() {
    return (
      <>
        <div className="container mx-auto px-40">
          <strong className="text-2xl ">
            Find the best tracker for yourself
          </strong>

          <div class="grid grid-cols-4 gap-3 justify-items-center">
            {this.state.teachers.map((teacher) => {
              return (
                <Teacher
                  imgUrl={teacher.image}
                  name={teacher.fullName}
                  email={teacher.email}
                  openModal={() =>
                    this.handleOpenModal(
                      teacher.image,
                      teacher.fullName,
                      teacher.emailAddress,
                      teacher.sgender,
                      teacher.star_rate
                    )
                  }
                />
              );
            })}
          </div>
        </div>
        <div>
          <ReactModal className="Modal" isOpen={this.state.showModal}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="absolute top-0 right-0 h-16 w-16 cursor-pointer"
              onClick={this.handleCloseModal}
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>

            <div class="mb-4 h-28">
              <img
                src={this.state.imgUrl}
                class="max-w-full h-64 rounded-full absolute left-24 top-14"
                alt=""
              />
            </div>

            <div className="personal-info absolute top-96 left-12 text-2xl">
              <Rating rate={this.state.rate} />
              <i>{this.state.name}</i>
              <div>
                <a href={this.state.email}>Send email</a>
              </div>
              <div>{this.state.phone}</div>
              <div>{this.state.gender}</div>
            </div>
          </ReactModal>
          <Footer />
        </div>
      </>
    );
  }
}

export default TeacherList;

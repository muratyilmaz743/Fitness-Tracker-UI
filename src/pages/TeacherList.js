import { Component } from "react";
import React from "react";
import ReactModal from "react-modal";
import TeacherDetail from "../Components/teacherDetailSidebar";
import Rating from "../Components/ratingStars";

class TeacherList extends Component {
  constructor() {
    super();
    this.state = {
      showModal: false,
      content: ""
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal(content) {
    this.setState({ showModal: true, content:content });
  }

  handleCloseModal() {
    this.setState({ showModal: false});
  }

  render() {
    return (
      <>
        <div className="container lg:mx-auto mt-8">
          <strong className="text-2xl">
            Find the best teacher for yourself
          </strong>
          <div id="teacherBox" className="box-border h-56 w-56 p-4 border-4 m-6">
            <div class="mb-4">
              <img
                src="https://mdbootstrap.com//img/Photos/Square/1.jpg"
                class="max-w-full h-28 rounded-full"
                alt=""
              />
            </div>
            <Rating />
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-2" onClick={() => this.handleOpenModal('a')}>
              Trainer Name
            </button>
          </div>
          <div id="teacherBox" className="box-border h-56 w-56 p-4 border-4 m-6">
            <div class="mb-4">
              <img
                src="https://mdbootstrap.com//img/Photos/Square/1.jpg"
                class="max-w-full h-28 rounded-full"
                alt=""
              />
            </div>
            <Rating />
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-2" onClick={() => this.handleOpenModal('b')}>
              Trainer Name
            </button>
          </div>
          <div id="teacherBox" className="box-border h-56 w-56 p-4 border-4 m-6">
            <div class="mb-4">
              <img
                src="https://mdbootstrap.com//img/Photos/Square/1.jpg"
                class="max-w-full h-28 rounded-full"
                alt=""
              />
            </div>
            <Rating />
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-2" onClick={() => this.handleOpenModal('c')}>
              Trainer Name
            </button>
          </div>
          <div>
            <ReactModal
              className="Modal"
              isOpen={this.state.showModal}
            >
              <TeacherDetail />
              <span>{this.state.content}</span>
              <button onClick={this.handleCloseModal}>Close</button>
            </ReactModal>
          </div>
        </div>
      </>
    );
  }
}

export default TeacherList;

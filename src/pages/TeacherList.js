import { Component } from "react";
import React from "react";
import ReactModal from "react-modal";
import TeacherDetail from "../Components/teacherDetailSidebar";

class TeacherList extends Component {
  constructor() {
    super();
    this.state = {
      showModal: false,
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal() {
    this.setState({ showModal: true });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }

  render() {
    return (
      <div>
        <button onClick={this.handleOpenModal}>Trigger Modal</button>
        <ReactModal
          className="Modal"
          isOpen={this.state.showModal}
          contentLabel="Minimal Modal Example"
        >
          <TeacherDetail />
          <button onClick={this.handleCloseModal}>Close Modal</button>
        </ReactModal>
      </div>
    );
  }
}

export default TeacherList;

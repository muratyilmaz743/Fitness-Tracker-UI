import React from "react";
import ReactDOM from "react-dom/client";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Main from "./pages/Main";
import Stats from "./pages/Statistics";
import TeacherList from "./pages/TeacherList";
import Exercises from "./pages/Exercise";
import "./index.css";

import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

class MyElement extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/stats" element={<Stats />} />
        <Route path="/teacherList" element={<TeacherList />} />
        <Route path="/exercise" element={<Exercises />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Main />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<MyElement />);

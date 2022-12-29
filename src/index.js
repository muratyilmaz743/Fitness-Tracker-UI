import React from "react";
import ReactDOM from "react-dom/client";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Main from "./pages/Main";
import Stats from "./pages/Statistics";
import TeacherList from "./pages/TeacherList";
import Exercises from "./pages/Exercise";
import Dashboard from "./pages/Dashboard";
import AddPlan from "./pages/AddPlan";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Workouts from "./pages/Workouts";
import Navbar from "./Components/navbar";
import Career from "./pages/Career";
import UserDetail from "./pages/UserDetail";
import Support from "./pages/Support";

<script
  src="https://cdnjs.cloudflare.com/ajax/libs/react-modal/3.14.3/react-modal.min.js"
  integrity="sha512-MY2jfK3DBnVzdS2V8MXo5lRtr0mNRroUI9hoLVv2/yL3vrJTam3VzASuKQ96fLEpyYIT4a8o7YgtUs5lPjiLVQ=="
  crossorigin="anonymous"
  referrerpolicy="no-referrer"
></script>;

class MyElement extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/stats" element={<Stats />} />
          <Route path="/userDetail" element={<UserDetail />} />
          <Route path="/career" element={<Career />} />
          <Route path="/support" element={<Support />} />
          <Route path="/teacherList" element={<TeacherList />} />
          <Route path="/exercise" element={<Exercises />} />
          <Route path="/workoutTips" element={<Workouts />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/addPlan" element={<AddPlan />} />
          <Route path="/" element={<Main />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<MyElement />);

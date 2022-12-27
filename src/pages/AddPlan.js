import React from "react";
import Workouts from "./Workouts";

function AddPlan() {
  return (
    <>
      <select name="days" id="days">
        <option value="monday">Pazartesi</option>
        <option value="tuesday">Salı</option>
        <option value="wednesday">Çarşamba</option>
        <option value="thursday">Perşembe</option>
        <option value="friday">Cuma</option>
        <option value="saturday">Cumartesi</option>
        <option value="sunday">Pazar</option>
      </select>
      <Workouts />
    </>
  );
}

export default AddPlan;

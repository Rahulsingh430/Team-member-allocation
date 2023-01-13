import React from "react";
import Team from "./Team";
import femalepic from "./images/femaleProfile.jpg";
import malepic from "./images/maleProfile.jpg";

const Employee = ({ employees, selectedTeam, handleChange, handleClick }) => {
  return (
    <main className="container">
      <div className="row justify-content-center mt-3 mb-3">
        <div className="col-6">
          <Team selectedTeam={selectedTeam} handleChange={handleChange} />
        </div>
      </div>
      <div className="row justify-content-center mt-3 mb-3">
        <div className="col-8">
          
        </div>
      </div>
    </main>
  );
};

export default Employee;

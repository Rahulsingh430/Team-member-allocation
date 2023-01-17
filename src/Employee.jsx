import React from "react";
import Team from "./Team";

import TeamMember from "./TeamMember";

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
          <TeamMember
            employees={employees}
            selectedTeam={selectedTeam}
            handleClick={handleClick}
          />
        </div>
      </div>
    </main>
  );
};

export default Employee;

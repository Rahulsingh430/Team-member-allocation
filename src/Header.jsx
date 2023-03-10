import React from "react";

const Header = ({ selectedTeam, teamMemberCount }) => {
  return (
    <header className="container">
      <div className="row justify-content-center mt-3 mb-4">
        <div className="col-8">
          <h1>Team Member allocation</h1>
          <h3>
            {selectedTeam} has {teamMemberCount !==0 ? teamMemberCount: null}{" "}
            {teamMemberCount === 1 ? "Member" : teamMemberCount===0 ? 'No Members':'Members'}
          </h3>
        </div>
      </div>
    </header>
  );
};

export default Header;

import React from "react";
import { useState } from "react";

function GroupedTeamMember({
  selectedTeam,
  employees,
  setTeam,
  teamMemberCount,
}) {
  const [groupedEmployee, setGroupedEmployee] = useState(groupTeamMembers());

  function groupTeamMembers() {
    var teams = [];

    var teamAMembers = employees.filter((emp) => emp.teamName === "TeamA");
    var teamA = {
      team: "TeamA",
      members: teamAMembers,
      collapsed: selectedTeam === "TeamA" ? false : true,
    };
    teams.push(teamA);

    var teamBMembers = employees.filter((emp) => emp.teamName === "TeamB");
    var teamB = {
      team: "TeamB",
      members: teamBMembers,
      collapsed: selectedTeam === "TeamB" ? false : true,
    };
    teams.push(teamB);

    var teamCMembers = employees.filter((emp) => emp.teamName === "TeamC");
    var teamC = {
      team: "TeamC",
      members: teamCMembers,
      collapsed: selectedTeam === "TeamC" ? false : true,
    };
    teams.push(teamC);

    var teamDMembers = employees.filter((emp) => emp.teamName === "TeamD");
    var teamD = {
      team: "TeamD",
      members: teamDMembers,
      collapsed: selectedTeam === "TeamD" ? false : true,
    };
    teams.push(teamD);

    return teams;
  }

  function handleTeamClick(event) {
    var transformedGroupData = groupedEmployee.map((groupedData) =>
      groupedData.team === event.currentTarget.id
        ? { ...groupedData, collapsed: !groupedData.collapsed }
        : groupedData
    );
    setGroupedEmployee(transformedGroupData);
    setTeam(event.currentTarget.id);
  }

  return (
    <>
      <header className="container">
        <div className="row justify-content-center mt-3 mb-4">
          <div className="col-8">
            <h1>Team Member allocation</h1>
            <h3>
              {selectedTeam} has {teamMemberCount===0? null: teamMemberCount}{" "}
              {teamMemberCount === 1 ? "Member" : teamMemberCount===0? "No members": "Members"}
            </h3>
          </div>
        </div>
      </header>
      <main className="container">
        {groupedEmployee.map((item) => {
          return (
            <div
              key={item.team}
              className="card mt-2"
              style={{ cursor: "pointer" }}
            >
              <h4
                id={item.team}
                className="card-header text-secondary bg-white"
                onClick={handleTeamClick}
              >
                Team Name: {item.team}
              </h4>
              <div
                id={"collapse_" + item.team}
                className={item.collapsed === true ? "collapse" : ""}
              >
                <hr />
                {item.members.map((member) => {
                  return (
                    <div className="mt-2">
                      <h5 className="card-title mt-2">
                        <span className="text-dark">
                          Full Name: {member.fullName}
                        </span>
                      </h5>
                      <p>Designation: {member.designation}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </main>
    </>
  );
}

export default GroupedTeamMember;

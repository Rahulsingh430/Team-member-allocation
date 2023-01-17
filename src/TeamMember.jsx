import TeamMemberCard from "./TeamMemberCard";

const TeamMember = ({ employees, selectedTeam, handleClick }) => {
  return (
    <div className="card-collection">
      {employees.map((employee) => (
        <TeamMemberCard
          employee={employee}
          handleClick={handleClick}
          selectedTeam={selectedTeam}
        />
      ))}
    </div>
  );
};

export default TeamMember;

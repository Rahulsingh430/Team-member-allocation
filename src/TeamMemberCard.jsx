const TeamMemberCard=({employee, handleclick, selectedTeam})=> {
    return (
        <div className="card-collection">
        {employee.map((emp) => (
          <div
            key={emp.id}
            id={emp.id}
            className={
              emp.teamName === selectedTeam
                ? "card m-2 standout"
                : "card m-2"
            }
            style={{ cursor: "pointer" }}
            onClick={handleClick}
          >
            {emp.gender === "male" ? (
              <img src={malepic} className="card-img-top" />
            ) : (
              <img src={femalepic} className="card-img-top" />
            )}

            <div className="card-body">
              <h5 className="card-title">Full Name: {emp.fullName}</h5>
              <p className="card-text">
                <b>Designation:</b> {emp.designation}
              </p>
            </div>
          </div>
        ))}
      </div>
          
      
    )
  }
  
  export default TeamMemberCard;
const TeamMember=({employees, handleclick, selectedTeam})=> {
    return (
         employees.map((employee)=>(
            <TeamMemberCard handleclick={handleclick} selectedTeam={selectedTeam} />
         ))
          
      
    )
  }
  
  export default TeamMember;
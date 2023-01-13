import React from 'react'

const Team=({selectedTeam,handleChange})=> {
  return (
    
        <select
            className="form-select form-select-lg"
            value={selectedTeam}
            onChange={handleChange}
          >
            <option value="TeamA">TeamA</option>
            <option value="TeamB">TeamB</option>
            <option value="TeamC">TeamC</option>
            <option value="TeamD">TeamD</option>
          </select>
    
  )
}

export default Team
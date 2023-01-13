import "./App.css";
import { useEffect, useState } from "react";
import {createBrowserRouter, createRoutesFromElements, Route} from 'react-router-dom';
import Header from "./Header";
import Footer from "./Footer";

import Employee from "./Employee";

function App({selectedTeam, setTeam, employees, setEmployees}) {
  //  const router = createBrowserRouter(
  //     createRoutesFromElements(
  //       <Route>
           
  //       </Route>

  //     )
  //  )

  
  useEffect(() => {
    localStorage.setItem("employeeList", JSON.stringify(employees));
  }, [employees]);

  useEffect(() => {
    localStorage.setItem("selectedTeam", JSON.stringify(selectedTeam));
  }, [selectedTeam]);

  const handleChange = (e) => {
    setTeam(e.target.value);
  };
  const handleClick = (e) => {
    const transformedEmployees = employees.map((emp) =>
      emp.id === parseInt(e.currentTarget.id)
        ? emp.teamName === selectedTeam
          ? { ...emp, teamName: "" }
          : { ...emp, teamName: selectedTeam }
        : emp
    );
    setEmployees(transformedEmployees);
  };

  return (
    <div className="App">
      <Header
        selectedTeam={selectedTeam}
        teamMemberCount={
          employees.filter((employee) => employee.teamName === selectedTeam)
            .length
        }
      />

      <Employee
        employees={employees}
        selectedTeam={selectedTeam}
        handleChange={handleChange}
        handleClick={handleClick}
      />
      <Footer />
    </div>
  );
}

export default App;

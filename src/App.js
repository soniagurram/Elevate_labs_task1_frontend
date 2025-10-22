import React, { useEffect, useState } from "react";
import { getEmployees, createEmployee, deleteEmployee } from "./api";
import EmployeeForm from "./EmployeeForm";
import EmployeeList from "./EmployeeList";

function App() {
  const [employees, setEmployees] = useState([]);

  const fetchEmployees = async () => {
    const data = await getEmployees();
    setEmployees(data);
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  const handleAdd = async (employee) => {
    await createEmployee(employee);
    fetchEmployees();
  };

  const handleDelete = async (id) => {
    await deleteEmployee(id);
    fetchEmployees();
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h1>Company Employee Management</h1>
      <EmployeeForm onSubmit={handleAdd} />
      <EmployeeList employees={employees} onDelete={handleDelete} />
    </div>
  );
}

export default App;

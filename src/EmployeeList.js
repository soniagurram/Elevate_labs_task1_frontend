import React from "react";

export default function EmployeeList({ employees, onDelete }) {
  return (
    <table border="1" cellPadding="8" style={{ width: "100%", marginTop: "1rem" }}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Role</th>
          <th>Department</th>
          <th>Email</th>
          <th>Salary</th>
          <th>Active</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {employees.map((emp) => (
          <tr key={emp.id}>
            <td>{emp.name}</td>
            <td>{emp.role}</td>
            <td>{emp.department}</td>
            <td>{emp.email}</td>
            <td>{emp.salary}</td>
            <td>{emp.is_active ? "Yes" : "No"}</td>
            <td>
              <button onClick={() => onDelete(emp.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

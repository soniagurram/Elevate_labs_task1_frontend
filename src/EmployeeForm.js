import React, { useState } from "react";

export default function EmployeeForm({ onSubmit }) {
  const [form, setForm] = useState({
    name: "",
    role: "",
    department: "",
    email: "",
    salary: "",
    is_active: true
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
    setForm({
      name: "",
      role: "",
      department: "",
      email: "",
      salary: "",
      is_active: true
    });
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "1rem" }}>
      <input name="name" value={form.name} onChange={handleChange} placeholder="Name" required />
      <input name="role" value={form.role} onChange={handleChange} placeholder="Role" required />
      <input name="department" value={form.department} onChange={handleChange} placeholder="Department" required />
      <input name="email" value={form.email} onChange={handleChange} placeholder="Email" required />
      <input name="salary" type="number" value={form.salary} onChange={handleChange} placeholder="Salary" required />
      <label>
        Active: <input type="checkbox" name="is_active" checked={form.is_active} onChange={handleChange} />
      </label>
      <button type="submit">Add Employee</button>
    </form>
  );
}

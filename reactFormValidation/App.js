import "./styles.css";
import React, { useState } from "react";
export default function App() {
  const [formData, setFormData] = useState({
    name: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let isValid = true;
    let newError = { name: "", password: "" };
    if (formData.name.trim() === "") {
      newError.name = "Name is required";
      isValid = false;
    }
    if (formData.password.trim() === "") {
      newError.password = "Password is required";
      isValid = false;
    }
    setErrors(newError);
    if (isValid) {
      alert("Form Submitted Successfully");
      setFormData({ name: "", password: "" });
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name : </label>
        <input
          value={formData.name}
          name="name"
          id="name"
          placeholder="Enter the Name"
          onChange={handleChange}
        />
        <p>{errors.name}</p>
      </div>
      <br />

      <div>
        <label>Password : </label>
        <input
          value={formData.password}
          name="password"
          id="password"
          placeholder="Enter the password"
          onChange={handleChange}
        />
        <p>{errors.password}</p>
      </div>
      <button>Submit</button>
    </form>
  );
}

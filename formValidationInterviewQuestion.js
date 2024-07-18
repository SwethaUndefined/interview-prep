import React, { useState, useEffect } from "react";
export default function App() {
  const [formData, setFormData] = useState({
    name: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    password: "",
  });
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let isValid = true;
    const newErrors = { name: "", password: "" };
    if (formData.name === "") {
      newErrors.name = "Name is required";
      isValid = false;
    }
    if (formData.password === "") {
      newErrors.password = "Password is required";
      isValid = false;
    }
    setErrors(newErrors);
    if (isValid) {
      alert("Form submitted successfully");
      setFormData({ name: "", password: "" });
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <p>Name:</p>
        <input
          id="name"
          name="name"
          placeholder="Enter the name"
          onChange={handleOnChange}
          value={formData.name}
        />
      </div>
      <div>
        <p>Password:</p>
        <input
          id="password"
          name="password"
          placeholder="Enter the password"
          onChange={handleOnChange}
          value={formData.password}
        />
      </div>
      <br />
      <button>Submit</button>
    </form>
  );
}

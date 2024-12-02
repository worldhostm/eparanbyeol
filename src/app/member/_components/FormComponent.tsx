'use client'

import React, { useState } from "react";
import '../_components/style.css';
type FormData = {
  name: string;
  age: number | "";
  email: string;
};

const FormComponent: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    age: "",
    email: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "age" ? (value === "" ? "" : parseInt(value)) : value,
    }));
  };

  const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
    const res = await fetch('http://localhost:8080/users',{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(formData),
    });
    if(res.ok){
        const data = await res.json()
        console.info('data :: ',data);
    }
    // 초기화 (선택 사항)
    setFormData({
      name: "",
      age: "",
      email: "",
    });
  };

  const handleDelete=async(deleteName:String)=>{
    const res = await fetch(`http://localhost:8080/users/${deleteName}`,{
        method:'DELETE',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({name:'조성민'}),
    });
    if(res.ok){
        const data = await res.json()
    }

  }

  return (
    <div>
      <h1>Simple Form</h1>
      
          <button
          onClick={()=>handleDelete('조성민')}
          >삭제</button>

      <form onSubmit={handleSubmit} className="form-container">
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
          />
        </div>
        <div>
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleChange}
            placeholder="Enter your age"
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormComponent;

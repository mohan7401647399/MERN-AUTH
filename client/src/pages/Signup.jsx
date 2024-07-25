import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Signup() {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const response = await fetch("/api/auth/signup", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(formData),
  //     });
  //     const dataJson = await response
  //       .json()
  //       .then((data) => console.log(data))
  //       .catch((err) => console.log(err.message));
  //     console.log(dataJson);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post("/api/auth/signup", { formData })
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
  };
  console.log(formData);

  return (
    <div className=" p-3 mx-auto max-w-lg">
      <h1 className="text-3xl text-center font-semibold my-7">Sign up</h1>
      <form onSubmit={handleSubmit} className=" flex flex-col gap-4">
        <input
          name="username"
          type="text"
          placeholder="Username"
          id="username"
          className=" bg-slate-100 p-3 rounded-lg"
          onChange={handleChange}
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          id="email"
          className=" bg-slate-100 p-3 rounded-lg"
          onChange={handleChange}
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          id="Password"
          className=" bg-slate-100 p-3 rounded-lg"
          onChange={handleChange}
        />
        <button className=" bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80">
          sign up
        </button>
      </form>
      <div className=" flex gap-2 mt-5">
        <p>Have an account?</p>
        <Link to="/signin">
          <span className="text-blue-500">Sign in</span>
        </Link>
      </div>
    </div>
  );
}

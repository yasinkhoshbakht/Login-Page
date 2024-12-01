import React, { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { Navigate } from "react-router-dom";

function LoginPage() {
  let [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  let [redirect, setRedirect] = useState(false);
  let handleChange = (e) => {
    let { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let response = await axios.post("https://reqres.in/api/login", formData);
      toast.success("Successfully logged in!");
      setRedirect(true);
    } catch (error) {
      toast.error("Login failed. Please try again.");
    }
  };
  if (redirect) {
    return <Navigate to="/Dashboard" replace={true} />;
  }
  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-br from-blue-400 to-purple-600">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md p-8 bg-white rounded-2xl shadow-xl"
      >
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">
          Welcome Back
        </h2>
        <div className="mb-4">
          <label className="block text-gray-600 font-medium mb-2">
            Username
          </label>
          <input
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Enter your username"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600 font-medium mb-2">Email</label>
          <input
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-600 font-medium mb-2">
            Password
          </label>
          <input
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg font-medium hover:bg-blue-600 transition"
        >
          Login
        </button>
      </form>
      <Toaster position="top-right" />
    </div>
  );
}

export default LoginPage;

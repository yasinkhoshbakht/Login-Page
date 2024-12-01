import React from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  let navigate = useNavigate();
  let handleLogout = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <header className="flex justify-between items-center bg-white p-4 shadow rounded">
        <h1 className="text-xl font-bold text-gray-800">Dashboard</h1>
        <button
          onClick={handleLogout}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        >
          Logout
        </button>
      </header>
      <div className="mt-6 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-4 rounded shadow">
            <p className="text-gray-500">Total Users</p>
            <p className="text-xl font-bold text-gray-800">1,245</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <p className="text-gray-500">Monthly Revenue</p>
            <p className="text-xl font-bold text-gray-800">$12,500</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <p className="text-gray-500">New Orders</p>
            <p className="text-xl font-bold text-gray-800">215</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <p className="text-gray-500">Active Subscriptions</p>
            <p className="text-xl font-bold text-gray-800">350</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-lg font-bold text-gray-800 mb-4">
            Sales Overview
          </h2>
          <ul className="space-y-2">
            <li>
              <span className="text-gray-500">Today:</span>{" "}
              <span className="font-bold text-gray-800">$2,100</span>
            </li>
            <li>
              <span className="text-gray-500">This Week:</span>{" "}
              <span className="font-bold text-gray-800">$15,300</span>
            </li>
            <li>
              <span className="text-gray-500">This Month:</span>{" "}
              <span className="font-bold text-gray-800">$45,900</span>
            </li>
            <li>
              <span className="text-gray-500">Year to Date:</span>{" "}
              <span className="font-bold text-gray-800">$550,000</span>
            </li>
          </ul>
        </div>
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-lg font-bold text-gray-800 mb-4">
            Recent Transactions
          </h2>
          <ul className="space-y-4">
            <li className="p-4 bg-gray-50 rounded">
              <p className="text-gray-700">
                01 Dec 2024 - Subscription Renewal
              </p>
              <p className="text-gray-500">$49.99 - Completed</p>
            </li>
            <li className="p-4 bg-gray-50 rounded">
              <p className="text-gray-700">30 Nov 2024 - Product Purchase</p>
              <p className="text-gray-500">$199.99 - Pending</p>
            </li>
            <li className="p-4 bg-gray-50 rounded">
              <p className="text-gray-700">28 Nov 2024 - Service Upgrade</p>
              <p className="text-gray-500">$89.99 - Completed</p>
            </li>
          </ul>
        </div>
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-lg font-bold text-gray-800 mb-4">
            User Feedback
          </h2>
          <ul className="space-y-4">
            <li className="p-4 bg-gray-50 rounded">
              <p className="text-gray-600">
                "Great platform, highly recommended!"
              </p>
              <p className="text-xs text-gray-500 mt-2">- John Doe</p>
            </li>
            <li className="p-4 bg-gray-50 rounded">
              <p className="text-gray-600">
                "The support team is very helpful."
              </p>
              <p className="text-xs text-gray-500 mt-2">- Jane Smith</p>
            </li>
            <li className="p-4 bg-gray-50 rounded">
              <p className="text-gray-600">
                "Excellent features and easy to use."
              </p>
              <p className="text-xs text-gray-500 mt-2">- Alice Johnson</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

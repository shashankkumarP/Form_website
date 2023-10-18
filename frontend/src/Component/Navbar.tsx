import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="bg-blue-500 p-4 mt-1">
      <div className="container mx-auto flex justify-between items-center">
        <h2
          onClick={() => {
            navigate("/");
          }}
          className="hover:cursor-pointer text-white text-2xl font-bold"
        >
          Levitation
        </h2>
        <ul className="flex space-x-4">
          <li
            onClick={() => {
              navigate("/showtable");
            }}
          >
            <p className="hover:cursor-pointer text-white">Table</p>
          </li>
          <li
            onClick={() => {
              navigate("/login");
            }}
          >
            <p className="hover:cursor-pointer text-white">Login</p>
          </li>
          <li
            onClick={() => {
              navigate("/register");
            }}
          >
            <p className="hover:cursor-pointer text-white">Register</p>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

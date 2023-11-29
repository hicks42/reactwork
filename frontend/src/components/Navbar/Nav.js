import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/morpion">Morpion</Link>
        </li>
        <li>
          <Link to="/basicapps">Basic Apps</Link>
        </li>
        <li>
          <Link to="/dpApp">Difficulty picker</Link>
        </li>
        <li>
          <Link to="/tvshow">TV show</Link>
        </li>
        <li>
          <Link to="/expenseTracker">Expenses Tracker</Link>
        </li>
        <li>
          <Link to="/noteManagerApp">Note Manager</Link>
        </li>
      </ul>
    </nav>
  );
}

import { useState, useEffect } from "react";
import "./index.css";

const Navbar = () => {
  return (
    <div className="Navbar">
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">News</a>
        </li>
        <li>
          <a href="#">Contacts</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;

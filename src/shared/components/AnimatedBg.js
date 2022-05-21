import React from "react";
import "@assets/css/shared/AnimatedBg.css"

export default function AnimatedBg() {
  return (
    <>
      <div className="context">
        <header>
            <h1>Hello, I'm Valp</h1>
            <h2>I'm a Frontend Developer</h2>    
            <a className="btn btn-outline-primary">Get started</a>
        </header>
      </div>

      <div className="area">
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </>
  );
}

import React, { useState } from "react";
import "@assets/css/shared/Hero.css";

export default function AnimatedBg() {

  const [shapes] = useState([1,2,3,4,5,6,7,8,9,10]); 

  return (
    <>
      <header className="hero-heading">
        <h1>Hello, I'm Valp</h1>
        <h2>I'm a Frontend Developer</h2>
        <a className="btn btn-outline-primary">Get started</a>
      </header>

      <div className="area">
        <ul className="circles">
          {shapes.map(shape => <li key={shape}></li>)}
        </ul>
      </div>
    </>
  );
}

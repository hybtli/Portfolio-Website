import React, { useEffect, useState } from "react";
import PDF from "../assets/Resume.pdf";

const Navbar = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleClick = () => {
    window.open(PDF, "_blank");
  };

  return (
    <div
      className="navbar bg-base-100"
      style={{
        fontFamily: '"SF Mono","Fira Code","Fira Mono","Roboto Mono",monospace',
        fontSize: "smaller",
        fontWeight: 400,
        color: "#ccd6f6",
        backgroundColor: "#0a192f",
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: 1,
      }}
    >
      <div className="flex-1">
        <a href="/" className="btn btn-ghost normal-case text-xl">
          Nurbala Heybətov
        </a>
      </div>
      {windowWidth > 850 ? (
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 mr-4">
            <li>
              <a href="#about">
                <span style={{ color: "#64ffda" }}>00.</span>About
              </a>
            </li>
            <li>
              <a href="#timeline">
                <span style={{ color: "#64ffda" }}>01.</span>Timeline
              </a>
            </li>
            <li>
              <a href="#contact">
                <span style={{ color: "#64ffda" }}>02.</span>Contact
              </a>
            </li>
          </ul>
          <button
            className="btn btn-outline btn-secondary py-0 px-4 mr-2"
            onClick={handleClick}
          >
            Resume
          </button>
        </div>
      ) : (
        <div>A</div>
      )}
    </div>
  );
};

export default Navbar;

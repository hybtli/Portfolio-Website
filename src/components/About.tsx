import React from "react";
import { Box } from "@mui/material";

const About = () => {
  return (
    <Box className="about" id="about">
      <div className="about-part-I">
        <p className="fs-2 fw-bold">
          <span
            style={{
              fontFamily:
                '"SF Mono","Fira Code","Fira Mono","Roboto Mono",monospace',
              color: "#64ffda",
              fontSize: "smaller",
              fontWeight: 400,
            }}
          >
            00.
          </span>{" "}
          About Me
        </p>
      </div>
      <div>
        <p className="about-text-I">
          Hi, my full name is Nurbala Heybatov and I'm motivated student who
          seeking to learn everything toward computer engineering degree.
          Committed to developing career path and expanding work experience. I'm
          currently working in Delta Smart Technologies.
        </p>
        <p className="about-text-II">
          Here are a few technologies I’ve been working with recently and know
          about before:
        </p>
        <ul className="skills">
          <li>
            <span style={{ color: "#f57dff" }}>₼ -</span> TypeScript
          </li>
          <li>
            <span style={{ color: "#f57dff" }}>₼ -</span> JavaScript
          </li>
          <li>
            <span style={{ color: "#f57dff" }}>₼ -</span> React
          </li>
          <li>
            <span style={{ color: "#f57dff" }}>₼ -</span> Redux
          </li>
          <li>
            <span style={{ color: "#f57dff" }}>₼ -</span> Java
          </li>
          <li>
            <span style={{ color: "#f57dff" }}>₼ - </span> Python
          </li>
        </ul>
      </div>
    </Box>
  );
};

export default About;

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
          Hello there ! My name is Nurbala and I'm motivated student who seeking
          to learn everything toward computer engineering degree. Committed to
          developing career path and expanding work experience. I'm currently
          working in Delta Smart Technologies.
        </p>
        <p className="about-text-II">
          Here are a few technologies I’ve been working with recently:
        </p>
        <ul className="skills">
          <li> - TypeScript</li>
          <li> - JavaScript</li>
          <li> - React</li>
          <li> - Redux</li>
        </ul>
      </div>
    </Box>
  );
};

export default About;

import React from "react";
import { Box } from "@mui/material";

const About = () => {
  const languages = [
    { name: "TypeScript" },
    { name: "JavaScript" },
    { name: "Python" },
    { name: "Java" },
    { name: "C" },
    { name: "Assembly" },
    { name: "HTML" },
    { name: "CSS" },
  ];

  const tools = [
    { name: "Git" },
    { name: "Github" },
    { name: "Bash" },
    { name: "Dev Azure" },
    { name: "MongoDB (...learning)" },
  ];

  const frameworks = [{ name: "React" }, { name: "NodeJS (...learning)" }];

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

        <div
          className="flex flex-wrap"
          style={{
            fontFamily:
              '"SF Mono","Fira Code","Fira Mono","Roboto Mono",monospace',
          }}
        >
          <div className="w-full md:w-1/3 p-4">
            <h2 style={{ color: "#f57dff" }}>Languages</h2>
            <ul>
              {languages.map((language) => (
                <li style={{ color: "#57cbff" }}>{language.name}</li>
              ))}
            </ul>
          </div>

          <div className="w-full md:w-1/3 p-4">
            <h2 style={{ color: "#f57dff" }}>Tools</h2>
            <ul>
              {tools.map((tool) => (
                <li style={{ color: "#57cbff" }}>{tool.name}</li>
              ))}
            </ul>
          </div>

          <div className="w-full md:w-1/3 p-4">
            <h2 style={{ color: "#f57dff" }}>Frameworks</h2>
            <ul>
              {frameworks.map((framework) => (
                <li style={{ color: "#57cbff" }}>{framework.name}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Box>
  );
};

export default About;

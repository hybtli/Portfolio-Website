import React from "react";
import "./App.css";
import { Nav, Navbar, Container } from "react-bootstrap";
import logo from "./images/image-1.jpg";
import { Box } from "@mui/material";

function App() {
  return (
    <>
      <Box>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand className="" href="/">
              <img src={logo} width="30" height="30" alt="My Logo" />
            </Navbar.Brand>
            <Nav className="flex justify-end">
              <Nav.Link href="#about">00. About </Nav.Link>
              <Nav.Link href="#experience">01. Experience </Nav.Link>
              <Nav.Link href="#contact">02. Contact </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </Box>

      <Box className="general-info">
        <div className="general-info-part-I">
          <p>Hello there, I'm</p>
        </div>
        <div className="general-info-part-II">
          <p className="fs-1 fw-bold">Nurbala Heybətov</p>
        </div>
        <div className="general-info-part-III">
          <p className="fs-1 fw-bold">
            I specialize in constructing web-based systems.
          </p>
        </div>
        <div className="general-info-part-IV">
          <p>
            I'm senior computer engineering student with a focus on software
            engineering. As of now, I am working as a Frontend Developer.
          </p>
        </div>
      </Box>

      <Box className="about" id="about">
        <div className="about-part-I">
          <p className="fs-2 fw-bold">00. About Me</p>
        </div>
        <div>
          <p className="about-text-I">
            Hello there ! My name is Nurbala and I'm motivated student who
            seeking to learn everything toward computer engineering degree.
            Committed to developing career path and expanding work experience.
            I'm currently working in Delta Smart Technologies.
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

      <Box className="" id="experience">
        <div>
          <p className="fs-2 fw-bold">01. Experience</p>
        </div>
      </Box>
    </>
  );
}

export default App;

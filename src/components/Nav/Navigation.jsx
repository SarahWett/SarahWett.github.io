import { useState, useEffect } from "react";
import Image from "next/image";
//Styles Bootstrap
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../assets/logo3.jpeg";
import { useRouter } from "next/router";

//Styles CSS

import { StyledContainer } from "./Navigation.styles";

export default function NavBar() {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Navbar
      fixed="top"
      bg="dark"
      collapseOnSelect
      expand="md"
      className={scrolled ? "scrolled" : ""}
    >
      <StyledContainer>
        <Navbar.Brand href="#home">
          <Image
            width="18vh"
            height="18vh"
            src={logo}
            alt="logo"
            className="brand"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse className="all-navs" id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="/"
              className={
                activeLink === "home" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("home")}
            >
              home.
            </Nav.Link>
            <Nav.Link
              href="/SkillSection"
              className={
                activeLink === "skills" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("skills")}
            >
              skills.
            </Nav.Link>
            <Nav.Link
              href="/Projects"
              className={
                activeLink === "projects" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("projects")}
            >
              projects.
            </Nav.Link>
          </Nav>
          <span>
            <button className="connect" onClick={() => console.log("connect")}>
              <span>Let&apos;s connect!</span>
            </button>
          </span>
        </Navbar.Collapse>
      </StyledContainer>
    </Navbar>
  );
}

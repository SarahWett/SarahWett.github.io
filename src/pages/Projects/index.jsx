import NavBar from "../../components/Nav/Navigation";
import Footer from "../../components/Footer/Footer";
import { ProjectCard } from "../../components/ProjectCard";
import { Header } from "../../components/Skills/Skilly.styles";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import colorSharp2 from "../../assets/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";
import projImg1 from "../../assets/Mood.png";
import projImg2 from "../../assets/QuizzyBreak.png";
import projImg3 from "../../assets/Website.png";
import Image from "next/image";
import Carousel from "react-bootstrap/Carousel";
import {
  StyledBackgroundImage,
  StyledImages,
  StyledProjectContainer,
} from "./Projects.styles";
import ProjectsStructure from "../../components/Projects/Projects";

export default function Projects() {
  const projects = [
    {
      title: "MoodTracker",
      description:
        "React / Next.js / Framer Motion / Charts.js / Styled Components",
      imgUrl: projImg1,
    },
    {
      title: "'Quizzy' Quizz-App",
      description: "TypeScript / React / Styled Components",
      imgUrl: projImg2,
    },
    {
      title: "This Website",
      description: "Next.js / React / Styled Components",
      imgUrl: projImg3,
    },
  ];
  return (
    <>
      <NavBar />
      <StyledBackgroundImage
        alt="backgroundblur"
        className="background-image-right"
        src={colorSharp2}
      />
      <Header>Projects.</Header>

      <StyledProjectContainer>
        <p>
          Here are some of my projects that I have worked on. Feel free to check
          them out on GitHub @SarahWett and let me know what you think!
        </p>
      </StyledProjectContainer>
      <Footer />
    </>
  );
}

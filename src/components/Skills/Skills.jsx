import meter1 from "../../assets/meter1.svg";
import meter2 from "../../assets/meter2.svg";
import meter3 from "../../assets/meter3.svg";
import Carousel from "react-bootstrap/Carousel";
import "react-multi-carousel/lib/styles.css";
import arrow1 from "../../assets/arrow1.svg";
import arrow2 from "../../assets/arrow2.svg";
import colorSharp from "../../assets/color-sharp.png";
import colorSharp2 from "../../assets/color-sharp2.png";
import Image from "next/image";
import {
  SkillNames,
  StyledBackground,
  StyledPara,
  StyledSkillBox,
  StyledSkillSlider,
  Container,
  Header,
} from "./Skilly.styles";
import { StyledSkillContainer } from "./Skilly.styles";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <>
      <StyledBackground
        className="background-image-left"
        src={colorSharp}
        alt="Image"
      />
      <StyledSkillContainer>
        {/* <Image className="background-image-left" src={colorSharp2} alt="Image" /> */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        />
        <div class="skills">
          <div class="each html">
            <div class="box">
              <div class="content">
                <h2>FRONTEND</h2>
                <p>html / CSS / JS / React / Angular / MUI </p>
                <i class="fa-brands fa-html5"></i>
                <i class="fa-brands fa-css3"></i>
                <i class="fa-brands fa-js"></i>
                <i class="fa-brands fa-react"></i>
              </div>
            </div>
          </div>
          <div class="each css">
            <div class="box">
              <div class="content">
                <h2>UX</h2>
                <p>
                  Google UX Certification<br></br>
                  Interaction Design Foundation
                </p>
                <i class="fa-brands fa-google"></i>
              </div>
            </div>
          </div>
          <div class="center">
            <div class="box">
              <h2>SKILLS</h2>
            </div>
          </div>
          <div class="each js">
            <div class="box">
              <div class="content">
                <i class="fa-brands fa-node"></i>
                <h2>BACKEND</h2>
                <p>Node / MongoDB / GraphQL / SQL</p>
              </div>
            </div>
          </div>
          <div class="each ng">
            <div class="box">
              <div class="content">
                <i class="fa-brands fa-react"></i>
                <h2>MOBILE</h2>
                <p>React Native / Ionic</p>
              </div>
            </div>
          </div>
        </div>
      </StyledSkillContainer>
    </>
  );
};

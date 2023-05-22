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
      <Header>Skills.</Header>
      <StyledSkillContainer id="skills">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <StyledSkillBox className="skill-bx wow zoomIn">
                <StyledPara>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.<br></br> Lorem Ipsum has been the
                  industry&apos;s standard dummy text.
                </StyledPara>
                <StyledSkillSlider className="skill-slider">
                  <Carousel
                    responsive={responsive}
                    infinite={true}
                    className="owl-carousel owl-theme skill-slider"
                  >
                    <div className="item">
                      <Image src={meter1} alt="Image" />
                      <SkillNames>Web Development</SkillNames>
                    </div>
                    <div className="item">
                      <Image src={meter2} alt="Image" />
                      <SkillNames>Brand Identity</SkillNames>
                    </div>
                    <div className="item">
                      <Image src={meter3} alt="Image" />
                      <SkillNames>Logo Design</SkillNames>
                    </div>
                    <div className="item">
                      <Image src={meter1} alt="Image" />
                      <SkillNames>Web Development</SkillNames>
                    </div>
                  </Carousel>
                </StyledSkillSlider>
              </StyledSkillBox>
            </div>
          </div>
        </div>
        {/* <Image className="background-image-left" src={colorSharp2} alt="Image" /> */}
      </StyledSkillContainer>
    </>
  );
};

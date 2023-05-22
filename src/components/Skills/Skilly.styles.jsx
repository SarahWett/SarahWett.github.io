import styled from "styled-components";
import Image from "next/image";

export const Header = styled.h2`
  display: flex;
  position: absolute;
  top: 20%;
  left: 45%;
  align-self: center;
  text-transform: uppercase;
  color: black;
`;

export const StyledBackground = styled(Image)`
  display: flex;
  position: fixed;
  top: 10vh;
`;

export const StyledSkillContainer = styled.section`
  padding: 0 0 50px 0;
  position: absolute;
  top: 45%;
  left: 15%;
  width: 70%;
`;

export const StyledSkillBox = styled.div`
  /* From https://css.glass */
  background: rgba(21, 21, 21, 0.38);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(8.7px);
  -webkit-backdrop-filter: blur(8.7px);
  border: 1px solid rgba(21, 21, 21, 0.3);
  border-radius: 64px;
  text-align: center;
  padding: 60px 50px;
  margin-top: -60px;
`;

export const StyledPara = styled.p`
  color: #fff;
  font-size: 18px;
  letter-spacing: 0.8px;
  line-height: 1.5em;
  margin: 14px 0 75px 0;
`;

export const StyledSkillSlider = styled.div`
  width: 80%;
  margin: 0 auto;
  position: relative;

  .skill-slider .item img {
    width: 50%;
    margin: 0 auto 15px auto;
  }
`;

export const SkillNames = styled.h5`
  color: #fff;
`;

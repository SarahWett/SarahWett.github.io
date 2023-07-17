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
  padding: 200px 0 50px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  width: 70%;

  .skills {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    width: 400px;
    gap: 20px;
    position: relative;
    justify-content: center;
    align-items: center;
    transition: 1s;
  }

  .each {
    background: #f1f3f6;
    box-shadow: inset 0 0 5px rgba(55, 84, 170, 0),
      inset 0 0 10px rgba(255, 255, 255, 0), 5px 5px 9px rgba(55, 84, 170, 0.15),
      -5px -5px 11px #be95c4, inset 0px 0px 2px rgba(255, 255, 255, 0.2);
    transition: box-shadow 0.2s ease-in-out;
    height: 190px;
    width: 190px;
    border-radius: 30px;
    font-family: Arial, Helvetica, sans-serif;
    border: 5px solid #be95c4;
  }

  .skills:hover .each {
    box-shadow: inset 4px 4px 7px rgba(55, 84, 170, 0.15),
      inset -4px -4px 10px white, 0px 0px 2px rgba(255, 255, 255, 0.2);
    transition: box-shadow 0.2s ease-in-out;
  }

  .each .box {
    padding: 16px;
  }

  .css .box {
    text-align: right;
  }

  .js .box {
    margin-top: 40px;
  }

  .ng .box {
    margin-top: 40px;
    text-align: right;
  }

  .each .box .content h2 {
    font-size: 20px;
    margin-top: 0;
    margin-bottom: 6px;
  }

  .each .box .content p {
    font-size: 12px;
    margin: 0;
  }

  .html .box .content i {
    margin-top: 40px;
  }

  .css .box .content i {
    font-size: 30px;
    margin-left: 100px;
    margin-top: 40px;
  }

  .js .box .content i {
    margin-bottom: 20px;
  }

  .ng .box .content i {
    margin-bottom: 20px;
  }

  .each .box .content i {
    font-size: 30px;
  }

  .center {
    position: absolute;
    height: 160px;
    width: 160px;
    background: #f1f3f6;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    border-radius: 108px;
    box-shadow: inset 0 0 5px rgba(55, 84, 170, 0),
      inset 0 0 10px rgba(255, 255, 255, 0), 5px 5px 9px rgba(55, 84, 170, 0.15),
      -5px -5px 11px white, inset 0px 0px 2px rgba(255, 255, 255, 0.2);
    transition: box-shadow 0.2s ease-in-out;
    border: 10px solid #e8edf5;
  }

  .center .box {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    font-family: Arial, Helvetica, sans-serif;
  }
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

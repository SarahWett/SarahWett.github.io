import styled from "styled-components";
import Image from "next/image";

export const StyledBackgroundImage = styled(Image)`
  display: flex;
  position: fixed;
  top: 10vh;
  right: 0;
`;

export const StyledProjectContainer = styled.section`
  padding: 90px 110px;
  margin: 280px 120px 50px 120px;
  height: 60vh;
  width: 80vw;
  justify-content: center;
  background: rgba(255, 255, 255, 0.31);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(8.6px);
  -webkit-backdrop-filter: blur(8.6px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  .carousel {
  }
  .caption {
    background-color: rgba(0, 0, 0, 0.7);
    border-radius: 16px;
    width: 60%;
    height: 40%;
    display: flex;
    flex-direction: column;
    position: absolute;
    bottom: 8%;
    left: 25%;
    padding: 20px;
    font-size: 1rem;
  }
`;

export const StyledImages = styled(Image)`
  border-radius: 12px;
  height: 30vh;
  /* display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto; */
`;

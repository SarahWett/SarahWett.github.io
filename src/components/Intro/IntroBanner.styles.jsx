import styled from "styled-components";
import Image from "next/image";

export const Background = styled(Image)`
  display: flex;
  position: fixed;
  right: 0;
  width: 100vw;
  z-index: -1;
`;

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 130px 80px 0 80px;
  padding: 50px 0 50px 0;
  /* From https://css.glass */
  background: rgba(255, 255, 255, 0.31);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(8.6px);
  -webkit-backdrop-filter: blur(8.6px);
  border: 1px solid rgba(255, 255, 255, 0.3);

  .intro-wrap {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 0px 80px 15px 80px;
    align-items: center;
  }

  .flex-container-two {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10vh;
    margin: 0px 150px 15px 150px;
    align-items: center;
    line-height: 2.5em;

    text-align: center;
  }

  .philosophy {
    font-family: Raleway, sans-serif;
    font-size: 16px;
    font-weight: 500;
    letter-spacing: 1px;
    margin: auto;
    justify-content: center;
    text-align: center;
    margin-top: 1em;
    flex-wrap: wrap;
    word-wrap: break-word;
  }

  .flex-container-three {
    animation: 2s ease-in-out;
    flex-direction: row;
    display: flex;
    justify-content: center;
    margin: 10px 100px 15px 100px;
    align-items: center;
  }

  p {
    font-family: Raleway, sans-serif;
    color: #1a1b1e;
    font-size: 80%;
    text-align: center;
  }

  .link-sw {
    color: whitesmoke;
    font-family: Raleway, sans-serif;
    font-weight: bold;
    font-size: 28px;
    text-decoration: none;
    background: #363635;
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(6.1px);
    -webkit-backdrop-filter: blur(6.1px);
    padding: 0.5rem;
    margin: auto;
    align-self: center;
  }

  .link-sw:hover {
    background: #fff099;
    border-radius: 16px;
    box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset,
      rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset,
      rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset,
      rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px,
      rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px,
      rgba(0, 0, 0, 0.09) 0px 32px 16px;

    color: rgb(247, 242, 242);
    font-size: 35px;
    box-shadow: 0 0.5em 0.5em -0.4em;
    transform: translateY(-0.25em);
    text-shadow: 0 -1px 1px #000, 1px 1px 1px #000, 0 1px 1px #000,
      1px 1px 1px #000, 1px 0 1px #000, 0 -1px 1px #000;
  }

  .heading {
    margin-top: 10%;
    margin-bottom: 0px;
    font-family: Raleway, sans-serif;
    color: #1a1b1e;
    font-size: 56px;
    line-height: 60px;
    font-weight: 600;
    letter-spacing: 0.4px;
    text-decoration: none;
  }

  .text-block-9 {
    font-family: Raleway, sans-serif;
    font-size: 16px;
    font-weight: 500;
    letter-spacing: 1px;
  }

  a:active,
  a:hover {
    outline: 0;
  }

  .link-code {
    display: inline-block;
    color: #fff;
    text-decoration: none;
    text-shadow: 1px 1px 1px #000, 0 -1px 1px #000, 1px 1px 1px #000,
      -1px 0 0 #000, 1px 1px 0 #000, 1px 0 0 #000, 0 -1px 0 #000;
  }

  .link-code:hover {
    background: #99c1b9;
    text-shadow: none;
    border-radius: 12px;
    color: rgb(59, 59, 59);
    box-shadow: 0 0.5em 0.5em -0.4em;
    transform: translateY(-0.2em);
  }

  .link-illust {
    display: inline-block;
    color: #fff;
    text-decoration: none;
    text-shadow: 1px 1px 1px #000, 0 -1px 1px #000, 1px 1px 1px #000,
      -1px 0 0 #000, 1px 1px 0 #000, 1px 0 0 #000, 0 -1px 0 #000;
  }

  .link-illust:hover {
    background: #f28482;
    text-shadow: none;
    color: rgb(59, 59, 59);
    border-radius: 12px;
    font-weight: bold;
    box-shadow: 0 0.5em 0.5em -0.4em;
    transform: translateY(-0.2em);
  }

  .link-write {
    display: inline-block;
    color: #fff;
    text-decoration: none;
    text-shadow: 1px 1px 1px #000, 0 -1px 1px #000, 1px 1px 1px #000,
      -1px 0 0 #000, 1px 1px 0 #000, 1px 0 0 #000, 0 -1px 0 #000;
  }

  .link-write:hover {
    background: #be95c4;

    border-radius: 12px;
    text-shadow: none;
    color: rgb(59, 59, 59);
    box-shadow: 0 0.5em 0.5em -0.4em;
    transform: translateY(-0.2em);
  }

  .heading {
    font-family: Raleway, sans-serif;
    color: #1a1b1e;
    font-size: 56px;
    line-height: 60px;
    font-weight: 600;
    letter-spacing: 2px;
  }

  a {
    text-decoration: none;
    color: #1a1b1e;
  }

  .short_intro {
    font-family: Raleway, sans-serif;

    font-size: 16px;
  }

  @media (min-width: 1200px) {
    .short_intro {
      font-size: 19px;
    }
  }

  @keyframes updown {
    0% {
      transform: translateY(-10px);
    }
    50% {
      transform: translateY(10px);
    }
    100% {
      transform: translateY(-5px);
    }
  }
  .txt-rotate > .wrap {
    border-right: 0.08em solid #666;
  }

  .interactive-text {
    font-weight: 600;
  }

  @media (max-width: 1200px) {
    h1 p {
      font-weight: 100;
      font-size: 3rem;
    }
    margin-top: 190px;
  }

  @media (max-width: 600px) {
    p {
      font-weight: 150;
      font-size: 1rem;
      margin: auto;
    }
    margin-top: 100px;
  }

  @media (max-width: 1200px) {
    p {
      font-weight: 150;
      font-size: 1.2rem;
      margin: auto;
    }
  }

  @media (min-width: 1200px) {
    p {
      font-weight: 250;
      font-size: 1.5rem;
      margin: auto;
    }
  }
`;

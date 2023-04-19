import styled from "styled-components";
import Container from "react-bootstrap/Container";

export const LogoImage = styled.div`
  height: 18vh;
  width: 18vh;
  pointer-events: none;
  display: inline-block;
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: -1;
  border-radius: 50%;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
`;

export const StyledContainer = styled(Container)`
  justify-content: space-around;
  text-decoration: none;
  color: #fff;
  align-items: center;
  display: flex;
  flex-direction: row;
  position: sticky;
  width: 100vw;
  height: auto;

  .brand {
    height: 18vh;
    width: 18vh;
    pointer-events: none;
    display: inline-block;
    position: absolute;
    top: 0px;
    left: 0px;
    z-index: -1;
    border-radius: 50%;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
      rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  }

  @media (max-width: 992px) {
    .brand {
      height: 12vh;
      width: 12vh;
      margin-top: 25px;
    }
  }

  @media (max-width: 767px) {
    .brand {
      display: none;
    }
  }

  .me-auto {
    margin-left: auto;
    margin-right: 10%;
  }

  .navbar-link {
    color: grey;
    text-decoration: none;
    list-style: none;
    font-family: Raleway, sans-serif;
    margin: auto;
    margin-right: 2rem;
    padding: 1rem;
    text-transform: uppercase;
    font-size: 16px;
    border-radius: 12px;
  }

  a.nav-link.navbar-link.active {
    color: #fff;
  }

  .navbar-link:hover {
    background-color: #f4e2e3;
    text-shadow: none;
    border-radius: 12px;
    color: rgb(59, 59, 59);
    box-shadow: 0 0.5em 0.5em -0.4em;
    transform: translateY(-0.2em);
  }

  .connect {
    padding: 10px;
    border-radius: 12px;
  }

  .connect {
    font-weight: 700;
    color: #363635;
    border: 1px solid #fff;
    padding: 10px 15px;
    font-size: 18px;
    margin-left: 18px;
    position: relative;
    background-color: #f4e2e3;
    transition: 0.3s ease-in-out;
  }
  .connect span {
    z-index: 1;
  }
  .connect::before {
    content: "";
    width: 0%;
    height: 100%;
    position: absolute;
    background-color: #f28482;
    border-radius: 12px;
    left: 0;
    top: 0;
    z-index: -1;
    transition: 0.3s ease-in-out;
  }
  .connect:hover {
    color: #fff;
    background-color: transparent;
  }
  .connect:hover::before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
  }

  .navbar-toggler-icon {
    width: 24px;
    height: 17px;
    background-image: none;
    position: relative;
    border-bottom: 2px solid grey;
    transition: all 300ms linear;
    top: -2px;
  }

  .navbar-toggler-icon:focus {
    border-bottom: 2px solid grey;
  }

  .navbar-toggler-icon:after,
  .navbar-toggler-icon:before {
    width: 24px;
    position: absolute;
    height: 2px;
    background-color: grey;
    top: 0;
    left: 0;
    content: "";
    transition: all 300ms linear;
    z-index: 2;
  }

  .navbar-toggler-icon::after {
    top: 8px;
  }

  .navbar-toggler[aria-expanded="true"] .navbar-toggler-icon::after {
    transform: rotate(45deg);
    background-color: #006d77;
    height: 2px;
  }

  .navbar-toggler[aria-expanded="true"] .navbar-toggler-icon:before {
    transform: translateY(8px) rotate(-45deg);
    background-color: #fff;
    height: 2px;
  }

  navbar-toggler[aria-expanded="true"] .navbar-toggler-icon {
    border-color: transparent;
  }
`;

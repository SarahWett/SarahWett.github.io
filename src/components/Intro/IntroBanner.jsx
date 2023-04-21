import { StyledContainer, StyledIcons } from "./IntroBanner.styles";
import "animate.css";
import TrackVisibility from "react-on-screen";
import { useState, useEffect } from "react";
import { NoSsr } from "next/dynamic";
import dynamic from "next/dynamic";

const DynamicIntroBanner = dynamic(() => import("./IntroBanner"), {
  ssr: false,
});

export default function Introduction() {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["passion", "curiosity", "creativity", "teamwork"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <>
      <StyledContainer>
        <section className="intro-wrap">
          <h1 className="firstHeading">Hi, I&apos;m&nbsp; </h1>
          <div>
            <a href="aboutme.html" className="link-sw">
              Sarah Wettengel
            </a>
          </div>
        </section>
        <section className="flex-container-two">
          <h1 className="heading animate__fadeInLeftBig">
            I
            <a href="#projects-section" className="link-code">
              code
            </a>
            ,{" "}
            <a
              href="https://www.instagram.com/sa.rah.art/"
              target="_blank"
              className="link-illust"
            >
              illustrate
            </a>{" "}
            &amp;
            <a
              href="https://medium.com/@sarahwettengel"
              target="_blank"
              className="link-write"
            >
              write
            </a>{" "}
            with
            <span id="heart">&hearts;</span>.
          </h1>

          <div>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <p className="short_intro paragraph-light ">
                    I&apos;m a Web Developer based in Germany with a special
                    faible for user experience design in digital products.
                    I&apos;m passionate about improving the lives of others and
                    am constantly looking to learn new things everyday.
                    <br />
                    <span className="interactive-text">
                      {`Because to me everything in life is about`}{" "}
                      <span
                        className="txt-rotate"
                        dataPeriod="1000"
                        data-rotate='["passion", "curiosity", "creativity", "teamwork"]'
                      >
                        <span className="wrap animate__fast">{text}</span>
                      </span>
                    </span>
                  </p>
                </div>
              )}
            </TrackVisibility>
          </div>
        </section>
      </StyledContainer>
    </>
  );
}

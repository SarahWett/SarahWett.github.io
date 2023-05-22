import { StyledParagraph, StyledHead } from "../../pages/About/About.styles";
import "animate.css";

export default function AboutText() {
  return (
    <>
      <div>
        <StyledHead className="animate__heartBeat">about.</StyledHead>
        <StyledParagraph>
          Hey there, my name is Sarah. <br />
          I&apos;m a software engineer based in Germany who is thrilled about 3D
          graphics, web development and illustration.
        </StyledParagraph>
      </div>
    </>
  );
}

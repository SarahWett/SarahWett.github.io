import { StyledIcons } from "./Footer.styles";
import Image from "next/image";
import insta from "../../assets/instagram_icon.svg";
import github from "../../assets/github_icon.svg";
import linkedin from "../../assets/linkedin_icon.svg";

export default function Footer() {
  return (
    <footer>
      <StyledIcons>
        <a href="https://github.com/SarahWett" target="_blank" rel="noreferrer">
          <Image width={24} height={24} src={github} alt="github" />
        </a>
        <a
          href="https://www.linkedin.com/in/sarah-wettengel/"
          target="_blank"
          rel="noreferrer"
        >
          <Image width={24} height={24} src={linkedin} alt="linkedin" />
        </a>
        <a
          href="https://instagram.com/sa.rah.art?igshid=YmMyMTA2M2Y="
          target="_blank"
          rel="noreferrer"
        >
          <Image width={24} height={24} src={insta} alt="instagram" />
        </a>
      </StyledIcons>
    </footer>
  );
}

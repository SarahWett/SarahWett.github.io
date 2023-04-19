import { StyledIcons } from "./Footer.styles";
import Image from "next/image";

export default function Footer() {
  return (
    <footer>
      <StyledIcons>
        <a href="" target="_blank" rel="noreferrer">
          <Image
            width="24"
            height="24"
            src="../../assets/github_icon.svg"
            alt="github"
          />
        </a>
        <a href="" target="_blank" rel="noreferrer">
          <Image
            width="24"
            height="24"
            src="../../assets/linkedin_icon.svg"
            alt="linkedinn"
          />
        </a>
        <a href="" target="_blank" rel="noreferrer">
          <Image
            width="24"
            height="24"
            src="../../assets/instagram_icon.svg"
            alt="instagram"
          />
        </a>
      </StyledIcons>
    </footer>
  );
}

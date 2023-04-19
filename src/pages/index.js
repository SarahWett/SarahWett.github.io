import { Inter } from "next/font/google";
import NavBar from "../components/Nav/Navigation";
import Introduction from "../components/Intro/IntroBanner";
import Footer from "../components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <NavBar />
      <Introduction />
      <Footer />
    </main>
  );
}

import { Link } from "react-router-dom";
import { IoLogoLinkedin, IoLogoInstagram } from "react-icons/io5";

function Footer() {
  return (
    <footer title="Rodapé com links para redes sociais" className="w-screen h-24 bg-primary flex justify-center align-center">
      <nav className="w-4/5 flex justify-between align-center items-center">
        <Link to="/" alt="link para a página Home">
          <h5 className="text-black px-auto">DevInLingua</h5>
        </Link>
        <div className="flex">
          <IoLogoLinkedin className="text-3xl mx-3" />
          <IoLogoInstagram className="text-3xl" />
        </div>
      </nav>
    </footer>
  );
}

export default Footer;
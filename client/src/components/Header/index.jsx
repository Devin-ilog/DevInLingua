import { Link } from "react-router-dom";
import { IoCalendarNumber } from "react-icons/io5";

function Header() {
  return (
    <header title="Cabeçalho com menu de navegação" className="header-component w-screen h-16 bg-black flex justify-center align-center">
      <nav className="w-4/5 flex justify-between align-center items-center">
        <Link to="/" >
          <h4 className="text-primary px-auto">DevInLingua</h4>
        </Link>
        <span className="bg-primary rounded-lg p-2 text-black">
          <Link aria-label="icon-calendar" to="/aulas-agendadas" >
            <IoCalendarNumber className="text-2xl" />
          </Link>
        </span>
      </nav>
    </header>
  );
}


export default Header;